import React from "react";
import { useParams } from "react-router-dom";

import Vote from "../components/Polls/Vote";

const VotePage = ()=>{
    const {id} = useParams();
    const poll = {_id:10100 , question:"what is my name" ,options:["yash" ,"kajal" ,"nikhil"]}
    return (<Vote poll={poll} id={id}/>)
}

export default VotePage;