import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

export default function Footer() {

    return(
        <>
            <Navbar bg="dark" variant="dark" id="footer">
                <Container>
                    <Navbar.Brand href="https://www.visualcrossing.com/">API: Visualcrossing.com</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}