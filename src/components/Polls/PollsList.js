import React ,{useEffect, useState} from "react";
import { Container ,Row ,Col } from "react-bootstrap";
import useApi from "../../service/api";
import Loader from "../Layouts/Loader";

import Poll from "./Poll";

const PollsList = ()=>{
    const api = useApi();
    const [polls ,setPolls] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        const apiCall =async()=>{
            try {
                const responseData = await api.get("/api/poll");
                const pollsArr = responseData.data.polls;
                setPolls(pollsArr);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                setError(true);
            }
        }
        apiCall()
    } ,[])

    if(isLoading)return (<Loader/>)

    if(error)return <p>Oops! Error please refresh the page to try again</p>
    
    return (<Container className="center">
        <Row>
            <Col style={{width:"90vw"}}>
                {polls.map((p)=>{return <Poll poll={p} navigate="polls/vote" />})}
            </Col>
        </Row>
        
    </Container>)
}

export default PollsList;