//(TODO: Samrat): conditional render Login page, list appointment and add doctor page
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
export default function Navs() {
    return (
        <Navbar bg="primary" collapseOnSelect expand="lg" variant="dark" >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Navbar.Brand href="/">CARE YOU pharmacy</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/doctors">List Doctors</Nav.Link>
                        <Nav.Link href="/about">About-us</Nav.Link>
                        <Nav.Link href="/Login">Admin Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}