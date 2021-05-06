import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

export default function Feedback() {

    return (
        <Container>
            <Row>
                <Col xs={12} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Badge variant="primary" style={{ marginBottom: "20px" }} className="badge-primary-soft">Thanks</Badge>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Thanks for trying out. If you have questions write me at tunc.polat@simplweb.ch or visit my website <a href="https://www.simplweb.ch">www.simplweb.ch</a></h2>
                </Col>
            </Row>
        </Container>
    );

}


