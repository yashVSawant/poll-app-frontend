import React, { useState } from 'react';

import classes from "./PollForm.module.css";

import useApi from '../../service/api';

const PollForm = (props) => {
  const api = useApi();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']); 
  const [isLoading , setIsLoading] = useState(false)

  const addOptionHandler = () => {
    setOptions([...options, '']); 
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    if (question && options.length >= 2 && options.every(option => option.trim())) {
    setIsLoading(true)
      try {
        await api.post("/api/poll",{question , options})
        setQuestion(''); 
        setOptions(['', '']); 
      } catch (err) {
        alert(err.response.data.message)
      }
      finally{
        setIsLoading(false)
      }
    }
  };

  return (
    <section className={classes.poll}>
      <form onSubmit={submitHandler}>
        <h1>Poll</h1>

        <div className={classes.control}>
          <label htmlFor='question'>Question</label>
          <input
            type='text'
            name='question'
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            required
            placeholder="Enter your poll question"
          />
        </div>

        {options.map((option, index) => (
          <div className={classes.control} key={index}>
            <label htmlFor={`option-${index}`}>Option {index + 1}</label>
            <input
              type='text'
              id={`option-${index}`}
              value={option}
              onChange={(event) => {
                const newOptions = [...options];
                newOptions[index] = event.target.value;
                setOptions(newOptions);
              }}
              required
              placeholder={`Enter option ${index + 1}`}
            />
            <button type='button' className={classes.remove} onClick={()=>{
                const newOptions = options.filter((o,i)=>i !== index);
                setOptions(newOptions)
            }}>
            remove
          </button>
          </div>
        ))}

        <div className={classes.actions}>
          <button type='button' className={classes.add} onClick={addOptionHandler}>
            + Add Option
          </button>
        </div>

        {!isLoading &&<div className={classes.actions}>
          <button type='submit'>Create Poll</button>
        </div>}
        {isLoading && <p>
          loading...!
          </p>}
      </form>
    </section>
  );
};

export default PollForm;
