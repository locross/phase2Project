import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from './Images/logo.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";

export default function Header() {

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
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
                    <Link to="About">
                        <Button>About</Button>{' '}
                    </Link>
                    <Link to="/">
                        <Button>Home</Button>{' '}
                    </Link>
                </Container>    
            </Navbar> 
            <Outlet />
        </>
    )
}