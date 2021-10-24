import React from "react";
import { Navbar,Nav, Container } from "react-bootstrap";
export default function Navs(){
    return (
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="/">CARE YOU pharmacy</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/doctors">List Doctors</Nav.Link>
                    <Nav.Link href="/about">About-us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}