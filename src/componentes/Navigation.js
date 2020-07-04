import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useLocation, Link } from 'wouter';
import useUser from '../hooks/useUser';
import { useEffect } from "react";

export default function Navigation() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const { isLoginLoading, hasLoginError, login, isLogged, logout } = useUser()


    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();

        login({ email, password })
    };

    const handleLogout = e => {
        logout();
    };

    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="br-dark dark">
            <Link to='/' className="navbar-brand">
                Grandiosa
            </Link>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <Link to='/novedades' className="nav-link">
                        Novedades
                    </Link>
                    <Link to='/lenceria' className="nav-link">
                        Lenceria
                    </Link>
                    <Link to='/ropadormir' className="nav-link">
                        Ropa de dormir
                    </Link>
                    <Link to='/ofertas' className="nav-link">
                        Ofertas
                    </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    <Link to='/Carro' className="nav-link">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                 Carrito
                    </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    {
                        isLogged
                            ?
                            <ReactBootStrap.NavDropdown aria-expanded="false" title="Usuario" id="collasible-nav-dropdown">
                                <Link to='/Perfil' className="dropdown-item">
                                    Editar perfil
                                    </Link>
                                <Link href="/" onClick={handleLogout} className="dropdown-item">
                                    Cerrar sesion
                                    </Link>
                            </ReactBootStrap.NavDropdown>
                            : <ReactBootStrap.NavDropdown title="Iniciar sesion" id="collasible-nav-dropdown">

                                <form className="px-4 py-3" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormEmail1">Correo electronico</label>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@ejemplo.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormPassword1">Contraseña</label>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña" />
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                        <label className="form-check-label" htmlFor="dropdownCheck">
                                            Recordar
                                 </label>
                                    </div>

                                    <button className="btn btn-primary">Iniciar sesion</button>

                                </form>
                                <div className="dropdown-divider"></div>
                                <Link to='/Perfil' className="dropdown-item">
                                    ¿Eres nuevo? Registrate aqui
                                    </Link>
                                <a className="dropdown-item" href="/"></a>
                                <Link to='/Perfil' className="dropdown-item">
                                    ¿Olvidaste tu contraseña?
                                    </Link>
                            </ReactBootStrap.NavDropdown>
                    }
                </ReactBootStrap.Nav>
                <Form inline >
                    <FormControl type="text" placeholder="Busca tu producto" className="mr-sm-2" />
                    <Button variant="outline-primary">Buscar</Button>
                </Form>
            </ReactBootStrap.Navbar.Collapse>

        </ReactBootStrap.Navbar >
    );


}
