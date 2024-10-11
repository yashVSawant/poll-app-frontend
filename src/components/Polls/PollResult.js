import React from "react";
import { Container ,Row } from "react-bootstrap";

import Options from "./Options";
import CommentsSection from "../Comments/CommentsSection";

import classes from "./PollResult.module.css";

const PollResults =()=> {
    const poll = {votes :[1 ,3,7] ,question:"what is my name" , options:["yash" , "nikhil" ,"kajal"]};
    const totalVotes = poll.votes.reduce((sum, voteCount) => sum + voteCount, 0);
  
    return (
      <React.Fragment>
      <Container className="center">
        <div className={classes.section} >
            <Row className={classes.question}>
                <h3>{poll.question}</h3>
            </Row>
            {poll.options.map((opt, index) => (
            <Row key={index} className={classes.options}>
                <Options opt={opt} votes={poll.votes[index]} totalVotes={totalVotes}/>
            </Row>
            ))}
        </div>
      </Container>
      <Container className="center">
        <Row>
          <CommentsSection/>
        </Row>
      </Container>
      </React.Fragment>
    );
  }
  
  export default PollResults;