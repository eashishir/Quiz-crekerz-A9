import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'


const Header = () => {
    return (
        <Navbar bg="info" expand="lg">
            <Container>
                <Navbar.Brand href="#home">myQuiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-around" >
                    <Nav className="d-flex justify-cont-around gap-4 " >
                        <Link className="style" to='/'>Home</Link>
                        <Link className="style" to='/statistic'>Statistic</Link>
                        <Link className="style" to='/blogs'>Blog</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;