import React, { useState } from "react";
import { Form, Button, Container, Row } from 'react-bootstrap';
import { login } from '../services'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container fluid="sm" >
            <Form>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email"
                            onChange={(e) => {
                                e.preventDefault();
                                setEmail(e.target.value);
                            }}
                        />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="Password"
                            onChange={(e) => {
                                e.preventDefault();
                                setPassword(e.target.value);
                            }}
                        />
                    </Form.Group>
                </Row>
                <Button variant="primary" onClick={(e) => {
                    e.preventDefault();
                    login({ email, password });
                }}
                >
                    Submit
                </Button>
                {' '}
                <Button variant="primary" onClick={(e) => {
                    setEmail('');
                    setPassword('');
                }}
                >
                    Reset
                </Button>
            </Form>
        </Container>
    )
}
export default Login;