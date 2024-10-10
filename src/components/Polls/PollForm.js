import React, { useState } from 'react';

import classes from "./PollForm.module.css";

const PollForm = (props) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']); 

  const addOptionHandler = () => {
    setOptions([...options, '']); 
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (question && options.length >= 2 && options.every(option => option.trim())) {
    console.log(question, options);
    
      setQuestion(''); 
      setOptions(['', '']); 
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
          </div>
        ))}

        <div className={classes.actions}>
          <button type='button' className={classes.add} onClick={addOptionHandler}>
            + Add Option
          </button>
        </div>

        <div className={classes.actions}>
          <button type='submit'>Create Poll</button>
        </div>
      </form>
    </section>
  );
};

export default PollForm;
