import React, { useState } from "react";
import { useParams } from "react-router-dom";
import keys from '../config/keys'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const PasswordChange = () => {
    const [newpassword, setNewpassword] = useState("")
    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    let { passwordtoken } = useParams();

    console.log(passwordtoken)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(keys.server + `/api/change-password/${passwordtoken}`, { newpassword })
            setSuccess("Password reset successfully.")
        } catch (error) {
            setErrorMessage(error.response.data)
        }
    }

    const onChange = (event) => {
        setNewpassword(event.target.value);
    };

    return (
        <div className="homepage-2">
            <section className="section ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            <div className="subscribe-content text-center">
                                <h2>Reset your password.</h2>
                                {success ?
                                    <Alert variant="success" >
                                        {success}
                                    </Alert>
                                    : <><p className="my-4">Change your password here.</p>
                                        {/* Subscribe Form */}
                                        <form className="subscribe-form" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Enter new password" onChange={onChange} />
                                            </div>
                                            {
                                                errorMessage && <Alert variant="danger" style={{ marginBottom: "20px" }}>
                                                    {errorMessage && errorMessage}
                                                </Alert>
                                            }
                                            <Button variant="primary" type="submit">
                                                Change password
                                            </Button>
                                        </form>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};


export default PasswordChange;