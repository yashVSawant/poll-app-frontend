import React from "react";
import classes from "./Poll.module.css"
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";

const Poll = (props)=>{
    const navigate = useNavigate();
    const poll = props.poll;
    return (
        <Row onClick={()=>{navigate(`${props.navigate}/${poll._id}`)}} className={classes.poll}>
            <h3>{poll.question}</h3>
        </Row>
    )
}

export default Poll