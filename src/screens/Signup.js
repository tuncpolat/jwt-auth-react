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

export default function Signup() {
    // context
    const { onSignUp } = useAuthDataContext();

    // custom hooks
    const { value: email, bind: bindEmail } = useInput('')
    const { value: password, bind: bindPassword } = useInput('')

    // hooks
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(keys.server + '/api/register', { email, password }, { withCredentials: true });
            onSignUp(res.headers.authorization, email)
        } catch (error) {
            setErrorMessage(error.response.data)
        }
    }


    return (
        <section>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={8} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h1>
                        <p className="subtitle-landing" style={{ textAlign: "center", marginBottom: "20px" }}></p>

                        <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
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


                            <Button variant="primary" type="submit" style={{ alignSelf: "center" }}>
                                Create Account
                            </Button>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1.5rem" }}>
                                <p style={{ margin: "0" }}>Already have an account?</p>
                                <Link to="/login" style={{ marginLeft: "5px" }}>Sign In Here</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

