import React from 'react'
import { useAuthDataContext } from "../context/AuthProvider";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Header() {
    const { authenticated, onLogout } = useAuthDataContext();

    return (
        <Container>
            <Navbar bg="white" variant="light" style={{ marginBottom: "10px", padding: "0" }}>
                <Navbar.Brand href="/" className="logo">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {
                            authenticated ?
                                <>
                                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link onClick={onLogout}>Sign Out</Nav.Link>
                                </> :
                                <>
                                    <Nav.Link href="/signup"><Button variant="primary">Sign Up</Button></Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>

    );

}



