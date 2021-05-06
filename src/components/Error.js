import React from "react";
import Alert from 'react-bootstrap/Alert'


export default function Error({ errorMessage }) {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Alert variant="danger">
                {errorMessage}
            </Alert>
        </div>
    )
};