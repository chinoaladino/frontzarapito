import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


class Navigation extends Component {
    render() {
        return (
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="br-dark dark">
                <ReactBootStrap.Navbar.Brand href="/">
                    Grandiosa
                </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">

                        <ReactBootStrap.Nav.Link href="/novedades">
                            Novedades
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/lenceria">
                            Lencería
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/ropadormir">
                            Ropa de dormir
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/ofertas">
                            Ofertas
                        </ReactBootStrap.Nav.Link>

                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>

                        <ReactBootStrap.Nav.Link href="/Carro">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                 Carrito
                        </ReactBootStrap.Nav.Link>

                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.NavDropdown title="Iniciar sesion" id="collasible-nav-dropdown">
                            <form className="px-4 py-3">
                                <div className="form-group">
                                    <label htmlFor="exampleDropdownFormEmail1">Correo electronico</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@ejemplo.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleDropdownFormPassword1">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                    <label className="form-check-label" htmlFor="dropdownCheck">
                                        Recordar
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary">Iniciar sesion</button>
                            </form>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">¿Eres nuevo? Registrate aqui</a>
                            <a className="dropdown-item" href="/">¿Olvidaste tu contraseña?</a>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                    <Form inline >
                        <FormControl type="text" placeholder="Busca tu producto" className="mr-sm-2" />
                        <Button variant="outline-primary">Buscar</Button>
                    </Form>
                </ReactBootStrap.Navbar.Collapse>

            </ReactBootStrap.Navbar>
        );
    }
}
export default Navigation;