import React,{useEffect, useState} from "react";
import { Container ,Row ,Col } from "react-bootstrap";

import UserInfo from "./UserInfo";
import Poll from "../Polls/Poll";
import Loader from "../Layouts/Loader";
import useApi from "../../service/api";

const Profile = ()=>{
    const api = useApi()
    const [user ,setUser] = useState({})
    const [createdPolls ,setCreatedPolls] = useState([]);
    const [votedPolls ,setVotedPolls] = useState([]);
    const [isLoading , setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        const apiCall = async()=>{
            try {
                const response = await api.get("/api/user");
                const user = response.data.user;
                setUser(user);
                setIsLoading(false);
                const polls = await api.get("/api/poll/user");
                const created = polls.data.created;
                const voted = polls.data.voted;
                setCreatedPolls(created);
                setVotedPolls(voted);
            } catch (err) {
                setIsLoading(false)
            }
        }
        apiCall()
    },[])

    if(isLoading)return (<Loader/>)


    return (
        <Container className="center">
            <div>
                <Row>
                    <Col>
                        <UserInfo user={user}/>
                    </Col>
                </Row>
                <Row style={{width:"80vw"}}>
                    <Col>
                        <h3>Created Polls</h3>
                        {createdPolls.map((p)=>{return <Poll poll={p} navigate="/polls/result"/>})}
                    </Col>
                    <Col>
                        <h3>Voted Polls</h3>
                        {votedPolls.map((p)=>{return <Poll poll={p} navigate="/polls/result"/>})}
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default  Profile;