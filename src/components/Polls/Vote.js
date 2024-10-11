// src/components/Poll.js
import React, { useState } from 'react';
import { Container ,Row ,Col ,Button } from 'react-bootstrap';

const Vote =({ poll , id})=> {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = () => {
    if (selectedOption !== null) {
      console.log(poll._id, selectedOption ,id);
    }
  };

  return (
    <Container className='center'>
        <div>
            <Row>
                <Col>
                    <h3>{poll.question}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                {poll.options.map((opt, index) => (
                    <div key={index}>
                    <label>
                        <input 
                        type="radio" 
                        value={index} 
                        checked={selectedOption === index} 
                        onChange={() => setSelectedOption(index)} 
                        />
                        {opt}
                    </label>
                    </div>
                ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={handleVote} disabled={selectedOption === null}>Vote</Button>
                </Col>
            </Row>
        </div>
    </Container>
  );
}

export default Vote;
