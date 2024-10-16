import React from "react";
import classes from "./Header.module.css"

import {Container, Navbar ,Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {useAuth} from "../Auth/AuthContext";


const Header = (props)=>{
    const {isAuthenticated ,logout} = useAuth()

    let navElements = <>
                <NavLink to="/profile" className={classes.navLink}>Profile</NavLink>
                <NavLink to="/" className={classes.navLink}>polls</NavLink>
                <NavLink to="/polls/create" className={classes.navLink}>Create Poll</NavLink>
                <Button onClick={()=>{logout()}} className={classes.navLink}>logout</Button>
    </>

    if(!isAuthenticated)navElements =<NavLink to="/auth" className={classes.navLink}>Login</NavLink>
    
    return (<header className={classes.header}>
        <Navbar bg="dark" variant="dark" style={{height:"15vh" }}>
            <Container>
                <Navbar.Brand><h1>The Polling App</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"/>
                <Nav className="me-auto justify-content-around" style={{width:"20vw"}}>
                    {navElements}
                </Nav>
            </Container>
        </Navbar>
    </header>)
}

export default Header;