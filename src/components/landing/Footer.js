import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <footer>
            <Container>
                <hr />
                <Row>
                    <Col xs={12} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <p>Developed by Tunç Polat at <a href="https://www.simplweb.ch">Simplweb</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}


