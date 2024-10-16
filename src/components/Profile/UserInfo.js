import React ,{useState} from "react";

import UploadImage from "./UploadImage"
import classes from "./Profile.module.css"
import { Container,Row ,Col} from "react-bootstrap";

const UserInfo = (props)=>{
    const {name , email ,imageUrl} = props.user;
    const [profileImage ,setProfileImage] = useState(imageUrl);

    const updateImageUrlHandler = (url)=>{
        setProfileImage(url)
    }
    return (<Container className={classes.profileSection}>
        <Row>
            <Col>
                <img src={profileImage} alt="profile" className={classes.profileImg}/>
                <UploadImage onUpload={updateImageUrlHandler}></UploadImage>
            </Col>
            <Col>
                <div className={classes.userInfoSection}>
                    <h3 className={classes.userInfo}>{name}</h3>
                    <p className={classes.userInfo}>{email}</p>
                </div>
            </Col>
        </Row>
        
    </Container>)
}

export default UserInfo;