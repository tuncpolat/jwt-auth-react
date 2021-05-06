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
        <Container fluid>
            <Row>
                <Col>
                    {user ?
                        <>You are logged in with email {user.email}. <br />
                        Your email is {user.confirmedEmail ? null : "not"} verified.
                    </> : null}
                </Col>
            </Row>
        </Container>
    );

}

