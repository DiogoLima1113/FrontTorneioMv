import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './Componentes.css';

function NavBarTorneio() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">Torneio MV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="navMenu" to="/times">Times</NavLink>
                    <NavLink className="navMenu" to="/jogadores">Jogadores</NavLink>
                    <NavLink className="navMenu" to="/">Jogos</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarTorneio;