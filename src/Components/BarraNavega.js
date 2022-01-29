import React, { Component } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import '../CSS/ButtonCurr.css'

export default class BarraNavega extends Component {
  render() {
    return (
        <Navbar id='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://res.cloudinary.com/dvh5dsa7s/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1642724611/img-portafolio/logo_size_a95ga3.jpg"
                width="60"
                height="40"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#Hola">Hola</Nav.Link>
                <Nav.Link href="#Proyectos">Proyectos</Nav.Link>
                <Nav.Link href="#Testimonio">Testimonios</Nav.Link>
                <Nav.Link href="Contactame">Contactame</Nav.Link>
            </Nav>
            <Nav>
                <Button className='button-curr'>Descargar Curriculum</Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
  }
}
