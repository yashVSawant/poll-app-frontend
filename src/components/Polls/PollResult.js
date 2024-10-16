import React ,{useEffect ,useState} from "react";
import { Container ,Row } from "react-bootstrap";

import Options from "./Options";
import CommentsSection from "../Comments/CommentsSection";
import Loader from "../Layouts/Loader";
import useApi from "../../service/api";
import {useSocket} from "../../sockets/SocketContext"

import { useParams } from "react-router-dom";

import classes from "./PollResult.module.css";

const PollResults =(props)=> {
    const socket = useSocket()
    const {pollId} = useParams()
    const api = useApi();
    const pollObj = {votes:[] ,options:[]}
    const [poll ,setPoll] = useState(pollObj)
    const [isLoading ,setIsLoading] = useState(false);
    const [error ,setError] = useState(null);
    const totalVotes = poll.votes.reduce((sum, voteCount) => sum + voteCount, 0);
    useEffect(()=>{
      setIsLoading(true)
      const apiCall = async()=>{
        try {
          const response = await api.get(`/api/poll/${pollId}`);
          const pollData = response.data.poll;
          console.log(response.data)
          setPoll(pollData);
          setIsLoading(false)
        } catch (err) {
          setIsLoading(false);
          setError("Oops!, Something went wrong")
        }
      }
      apiCall();
      if(socket){
        socket.emit("join-poll",pollId);
        socket.on("joined",()=>{
        })
    }
    } ,[])
    
    if(isLoading)return <Loader/>
    if(error)return <p>{error}</p>

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
          <CommentsSection pollId={pollId}/>
        </Row>
      </Container>
      </React.Fragment>
    );
  }
  
  export default PollResults;