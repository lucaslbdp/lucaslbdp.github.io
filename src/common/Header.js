import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./common.css";

const Header = () => {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="md" className='header-color' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Lucas Barrionuevo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/cv">CV</Nav.Link>
                            <Nav.Link href="#pricing">Contacto</Nav.Link>
                        </Nav>
                        <Nav className='redes-container'>
                            <ul>
                                <li><a target="_blank noreferrer" href="https://api.whatsapp.com/send?phone=543816851705" className="wsp"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                                <li><a target="_blank noreferrer" href="https://www.linkedin.com/in/lucas-alfredo-barrionuevo-8b92861b0/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};


export default Header;