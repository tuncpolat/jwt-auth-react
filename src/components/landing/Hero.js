import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Hero() {

    return (
        <section>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <h1 className="title-landing">JWT Auth <span>Example</span></h1>
                        <p className="subtitle-landing">Sign Up and see if everything works.</p>
                    </Col>
                </Row>
            </Container>


        </section>
    );

}


