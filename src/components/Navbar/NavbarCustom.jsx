import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './navbar.css';

const NavbarCustom = () => {
    return (
        <>
            <Navbar default collapseOnSelect bg="light" variant="light" className='navbar'>
                <Container>
                    <Navbar.Brand path='/'>
                        Cool Place
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav>
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarCustom