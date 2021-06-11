import React, { useState, useEffect } from 'react';
import axios from 'axios';
import keys from '../config/keys'
import { useAuthDataContext } from '../context/AuthProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Dashboard() {

    const [user, setUser] = useState(null)

    // table & pagination
    const { authenticated } = useAuthDataContext();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios({
                    method: 'get',
                    url: `${keys.server}/api/user`,
                    headers: { 'Authorization': authenticated }, // use context memorized
                    withCredentials: true
                });
                setUser(res.data)
            } catch (e) {
                console.log(e)
            }
        };

        fetchData();
    }, [authenticated]);





    return (
        <Container>
            <Row>
                <Col>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

                        {user ?
                            <>
                                <h1><span style={{ width: "40px" }} role="img" aria-label="emoji">🎉🥳🎉</span></h1>
                                <p style={{ textAlign: "center" }}>
                                    You are logged in with email <strong>{user.email}</strong>.
                                <br />
                                Your email is <strong>{user.confirmedEmail ? null : "not"} verified</strong>.
                                </p>
                            </> : null}

                    </div>
                </Col>
            </Row>
        </Container>
    );

}

