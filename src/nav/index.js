import React from "react";
import { Navbar,Nav, Container } from "react-bootstrap";
export default function Navs(){
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">ABC pharmacy</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/doctors">Book Appointment</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}