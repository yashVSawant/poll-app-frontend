import React from "react";
import { Container ,Row ,Col } from "react-bootstrap";

import Poll from "./Poll";

const PollsList = ()=>{
    const dummayPoll = [{_id:1010 ,question:"what is my name"} ,{_id:1011 ,question:"what is my name"}]
    return (<Container className="center">
        <Row>
            <Col>
                {dummayPoll.map((p)=>{return <Poll poll={p} />})}
            </Col>
        </Row>
        
    </Container>)
}

export default PollsList;