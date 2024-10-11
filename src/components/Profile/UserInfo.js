import React from "react";

import classes from "./Profile.module.css"
import { Container,Row ,Col} from "react-bootstrap";

const UserInfo = ()=>{
    return (<Container className={classes.profileSection}>
        <Row>
            <Col>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="profile" className={classes.profileImg}/>
            </Col>
            <Col>
                <div className={classes.userInfoSection}>
                    <h3 className={classes.userInfo}>user name</h3>
                    <p className={classes.userInfo}>email@gmail.com</p>
                </div>
            </Col>
        </Row>
        
    </Container>)
}

export default UserInfo;