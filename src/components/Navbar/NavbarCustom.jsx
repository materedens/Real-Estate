import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { LinkContainer } from 'react-router-dom';
// import './navbar.css';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarCustom = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='sm' bg="light" variant="light" sticky='top'>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            Cool Place
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className='mr-auto my-2 my-lg-0'
                            style={{ maxHeight: '100' }} navbarScroll >
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/services">
                                <Nav.Link>Services</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarCustom