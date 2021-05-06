import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
    useParams
} from 'react-router-dom'
import axios from 'axios';
import keys from '../config/keys'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../components/Loading'

export default function Confirmation() {
    // useParams
    let { emailtoken } = useParams()

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        confirmEmail()
    });

    const confirmEmail = async () => {
        try {
            const confirmation = await axios.get(keys.server + `/api/confirmation/${emailtoken}`)
            setEmail(confirmation.data.email)
            setSuccess(confirmation.data.success)
            setLoading(false);
        } catch (error) {
            setError(error.response.data)
            setSuccess(false)
            setLoading(false);
        }
    }


    return (
        <Container>
            <Row>
                <Col>
                    {
                        !loading
                            ?
                            success
                                ?
                                <div>Your email {email} was verified successfully. <Link to="/dashboard">GO TO DASHBOARD</Link></div>
                                :
                                <div>We couldn't verify your email {email}. Errormessage: {error}</div>
                            :
                            <Loading />
                    }
                </Col>
            </Row>
        </Container>
    );

}


