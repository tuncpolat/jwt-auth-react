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

export default function PasswordForget() {
    // context
    const { onLogin } = useAuthDataContext();

    // custom hooks
    const { value: email, bind: bindEmail } = useInput('')

    // hooks
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(keys.server + '/api/forgot-password', { email }, { withCredentials: true });
            onLogin(res.headers.authorization)
        } catch (error) {
            setErrorMessage(error.response.data)
        }
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col xs={12} md={{ span: 4, offset: 4 }}>
                        <h1 style={{ marginBottom: "20px" }}>Forgot your password?</h1>
                        <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Enter the email address associated with your account, and we’ll email you a link to reset your password.</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" {...bindEmail} />
                            </Form.Group>

                            {
                                errorMessage && <Alert variant="danger">
                                    {errorMessage && errorMessage}
                                </Alert>
                            }


                            <Button variant="primary" type="submit">
                                Send reset link
                            </Button>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                                <Link to="/login" style={{ marginLeft: "5px" }}>Back to login</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

