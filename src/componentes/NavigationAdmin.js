import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useLocation, Link } from 'wouter';
import useLoginAdmin from '../hooks/useLoginAdmin';
import { useEffect } from "react";

export default function Navigation() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [, navigate] = useLocation()
    const { loginAdmin, logout, isLoggedAdmin, hasLoginError } = useLoginAdmin()


    const handleLogout = e => {
        logout();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginAdmin({ email, password })
    };

    useEffect(() => {
        if (isLoggedAdmin) navigate('/')
    }, [isLoggedAdmin, navigate])


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
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    <Link to='/Carro' className="nav-link">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                 Carrito
                    </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    {
                        isLoggedAdmin
                            ?
                            <ReactBootStrap.NavDropdown aria-expanded="false" title="Usuario" id="collasible-nav-dropdown">
                                <Link to='/Perfil' className="dropdown-item">
                                    Editar perfil
                                    </Link>
                                <Link to='/Registrar' className="dropdown-item">
                                    Añadir productos
                                    </Link>
                                <Link href="/" onClick={handleLogout} className="dropdown-item">
                                    Cerrar sesion
                                    </Link>
                            </ReactBootStrap.NavDropdown>
                            : <></>
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



/*useEffect(() => {
    if (isLogged) navigate('/')
}, [isLogged, navigate])

const handleSubmit = (e) => {
    e.preventDefault();

    login({ email, password })
};

const handleLogout = e => {
    logout();
};*/