import React from 'react'

// context
import { useAuthDataContext } from "../context/AuthProvider";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function EmailSend() {
    // context
    const { sendEmail } = useAuthDataContext();


    return (
        <Container>
            <Row>
                <Col>
                    A verifikation link was send to your email {sendEmail}.
                    Check your email and verifiy it.
                </Col>
            </Row>
        </Container>
    );

}


