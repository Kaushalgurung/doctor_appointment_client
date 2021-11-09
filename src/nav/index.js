//(TODO: Samrat): conditional render Login page, list appointment and add doctor page
import React, { useContext, useEffect, useState } from "react";
import { NavDropdown, Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import { UserContext } from "../user/context";

const Logout = ({ show, handleClose }) => {
    const { logout } = useContext(UserContext);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    logout();
                    window.location.reload();
                }}>
                    Log Out
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default function Navs({ authenticated }) {
    const { refreshData, is_admin } = useContext(UserContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        refreshData();
    }, [])
    return (
        <>
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
                    {is_admin ? (
                            <Navbar.Collapse className="justify-content-end">
                                    Signed in as :
                                <Navbar.Text>
                                    <NavDropdown
                                        title="Admin"
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Change Password</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleShow}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Navbar.Text>
                            </Navbar.Collapse>
                    ) : ""}
                </Container>
            </Navbar>
            <Logout show={show} handleClose={handleClose} />
        </>
    )
}