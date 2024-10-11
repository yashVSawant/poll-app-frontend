import React from "react";
import classes from "./Poll.module.css"
import { useNavigate } from "react-router-dom";

const Poll = (props)=>{
    const navigate = useNavigate();
    const poll = props.poll;
    return (
        <div onClick={()=>{navigate(`/poll/${poll._id}`)}} className={classes.poll}>
            <h3>{poll.question}</h3>
        </div>
    )
}

export default Poll