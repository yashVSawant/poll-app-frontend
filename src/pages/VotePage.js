import React from "react";

import Vote from "../components/Polls/Vote";

const VotePage = ()=>{
    const poll = {_id:10100 , question:"what is my name" ,options:["yash" ,"kajal" ,"nikhil"]}
    return (<Vote poll={poll}/>)
}

export default VotePage;