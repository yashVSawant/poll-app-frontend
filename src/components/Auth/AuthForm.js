import { useState } from 'react';

import classes from './AuthForm.module.css';

import {useAuth} from "../Auth/AuthContext"

import useApi from "../../service/api";
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const navigate = useNavigate()
  const {login} = useAuth()
  const api = useApi();
  const userObj = {email:"", name:"" ,password:""}
  const [isLogin, setIsLogin] = useState(true);
  const [user , setUser] = useState(userObj);
  const [isLoading ,setIsLoading] = useState(false);

  //function to handel switching between login and signup 
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setUser(userObj);
  };

  //function to submit auth info to server
  const authHandler = async()=>{
    setIsLoading(true)
    try {
      if(isLogin){
        const responseData = await api.post("/api/auth/login",{email:user.email ,password:user.password});
        console.log(responseData);
        const token = responseData.data.token;
        login(token);
        navigate("/")
      }else{
        await api.post("/api/auth/register",{...user});
        setIsLogin(true);
      }
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(err)
       alert(err.response.data.message)
    }
  }

  // function to update state changes
  const changeHandler = (event)=>{
    const {name , value} = event.target;
    setUser({...user ,[name]:value });
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1> 
      <form >
        {!isLogin && <div className={classes.control}>
          <label htmlFor='email'>Your Name</label>
          <input type='text' name="name" value={user.name} onChange={changeHandler} required />
        </div>}
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' name="email" value={user.email} onChange={changeHandler} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            name="password"
            value={user.password}
            onChange={changeHandler}
            required/>
        </div>
        {!isLoading &&<div className={classes.actions}>
          <button
            type='button'
            onClick={authHandler}>
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </div>}
        {isLoading && <p>Loading ...!</p>}
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
