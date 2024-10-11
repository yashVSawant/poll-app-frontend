import React from "react";
import { Col } from "react-bootstrap";

const Options = (props)=>{
    return (
        <React.Fragment>
            <Col>{props.opt}</Col>
            <Col>{props.votes}</Col>
            <Col>({props.totalVotes > 0 ? ((props.votes / props.totalVotes) * 100).toFixed(2) : 0}%)</Col>
        </React.Fragment>
    )
}

export default Options;