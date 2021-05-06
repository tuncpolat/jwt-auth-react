import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import keys from '../config/keys'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

// custom hooks
import { useInput } from '../hooks/useInput'

// context
import { useAuthDataContext } from "../context/AuthProvider";

export default function Login() {
    // context
    const { onLogin } = useAuthDataContext();

    // custom hooks
    const { value: email, bind: bindEmail } = useInput('')
    const { value: password, bind: bindPassword } = useInput('')

    // hooks
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(keys.server + '/api/login', { email, password }, { withCredentials: true });
            onLogin(res.headers.authorization)
        } catch (error) {
            setErrorMessage(error.response.data)
        }
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        You could use an image here.
                    </Col>
                    <Col>
                        <h1 style={{ marginBottom: "20px" }}>Login</h1>
                        <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" {...bindEmail} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" style={{ marginBottom: "30px" }}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" {...bindPassword} />
                            </Form.Group>

                            {
                                errorMessage && <Alert variant="danger">
                                    {errorMessage && errorMessage}
                                </Alert>
                            }


                            <Button variant="primary" type="submit">
                                Login
                            </Button>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1.5rem" }}>
                                <p style={{ margin: "0" }}>Don't have an account?</p>
                                <Link to="/login" style={{ marginLeft: "5px" }}>Sign Up Here</Link>
                            </div>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                                <Link to="/password-forget" style={{ marginLeft: "5px" }}>Forget Password?</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

