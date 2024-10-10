import { useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const userObj = {email:"", name:"yash" ,password:""}
  const [isLogin, setIsLogin] = useState(true);
  const [user , setUser] = useState(userObj);

  //function to handel switching between login and signup 
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  //function to submit auth info to server
  const authHandler = async()=>{
    console.log(user);
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
        <div className={classes.actions}>
          <button
            type='button'
            onClick={authHandler}>
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </div>
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
