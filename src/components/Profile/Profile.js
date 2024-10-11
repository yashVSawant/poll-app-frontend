import React from "react";
import { Container ,Row ,Col } from "react-bootstrap";

import UserInfo from "./UserInfo";
import Poll from "../Polls/Poll";

const Profile = ()=>{
    const createdPolls = [{_id:1010 ,question:"what is my name"} ,{_id:1011 ,question:"what is my name"}];
    const votedPolls = [{_id:1010 ,question:"what is my name"} ,{_id:1011 ,question:"what is my name"}]
    return (
        <Container className="center">
            <div>
                <Row>
                    <Col>
                        <UserInfo/>
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