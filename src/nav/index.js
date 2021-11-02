//(TODO: Samrat): conditional render Login page, list appointment and add doctor page
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button} from "react-bootstrap";
export default function Navs({ authenticated }) {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark" >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Navbar.Brand href="/">CARE YOU pharmacy</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/doctors">List Doctors</Nav.Link>
                        <Nav.Link href="/about">About-us</Nav.Link>
                        {authenticated ? (
                            <Nav.Link href="/doctors/add">Add Doctor</Nav.Link>
                        ) : (
                            <Nav.Link href="/login">Admin Login</Nav.Link>
                        )
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as : <a href="#login">Admin</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                    <Button variant="" onClick={()=>{
                        console.log("logout")
                    }}>Logout</Button>
            </Container>
        </Navbar>
    )
}