import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from './Images/logo.png'
import { Link, Outlet } from "react-router-dom";

export default function Header() {

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                        <Link to="/">Home</Link>
                        <Link to="About">About</Link>
                        <Navbar.Brand>
                        <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Weather Hub
                        </Navbar.Brand>
                </Container>    
            </Navbar> 
            <Outlet />
        </>
    )
}