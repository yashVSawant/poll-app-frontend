import React from "react";

import classes from "./Profile.module.css"

const UserInfo = ()=>{
    return (<div className={classes.profileSection}>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="profile" className={classes.profileImg}/>
        </div>
        <div className={classes.userInfoSection}>
            <h3 className={classes.userInfo}>user name</h3>
            <p className={classes.userInfo}>email@gmail.com</p>
        </div>
    </div>)
}

export default UserInfo;