import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useLocation, Link } from 'wouter';
import useLogin from '../hooks/useLogin';
import useLoginAdmin from '../hooks/useLoginAdmin';
import { useEffect } from "react";

export default function Navigation() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [, navigate] = useLocation()
    const { login, logout, isLogged, hasLoginError } = useLogin()
    const { loginAdmin, logoutAdmin, isLoggedAdmin, hasLoginAdminError } = useLoginAdmin()


    const handleLogout = e => {
        logout();
    }

    const handleLogoutAdmin = e => {
        logoutAdmin();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        login({ email, password })
    };

    useEffect(() => {
        if (isLoggedAdmin){
            navigate('/')
        } else{
            console.log(isLogged, isLoggedAdmin)

        }
    }, [isLogged || isLoggedAdmin, navigate])


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
                            <>
                              <ReactBootStrap.NavDropdown aria-expanded="false" title={<span><i className="fa fa-user fa-fw"></i> {localStorage.getItem('email')}</span>}  id="collasible-nav-dropdown">
                                <Link to='/Perfil' className="dropdown-item">
                                    Editar perfil
                                    </Link>
                                <Link to='/gestionarproductos' className="dropdown-item">
                                    Gestionar productos
                                    </Link>
                                <Link href="/" onClick={handleLogoutAdmin} className="dropdown-item">
                                    Cerrar sesion
                                    </Link>
                            </ReactBootStrap.NavDropdown>
                            </>

                        :isLogged
                            ?
                            <ReactBootStrap.NavDropdown aria-expanded="false" title={<span><i className="fa fa-user fa-fw"></i> {localStorage.getItem('email')}</span>} id="collasible-nav-dropdown">
                                <Link to='/Perfil' className="dropdown-item">
                                    Editar perfil
                                    </Link>
                                <Link href="/" onClick={handleLogout} className="dropdown-item">
                                    Cerrar sesion
                                    </Link>
                            </ReactBootStrap.NavDropdown>
                            : <><span className="glyphicon glyphicon-user"></span> <ReactBootStrap.NavDropdown  title={<span><i className="fa fa-sign-in"></i> Iniciar sesion</span>} id="collasible-nav-dropdown">
                                <form className="px-4 py-3" onSubmit={handleSubmit}>

                                    <div className="form-group">
                                        {hasLoginError &&
                                            <div className="alert alert-danger alert-styled-left">
                                                Correo o contraseña inválidos
                                    </div>
                                        }
                                        <label htmlFor="exampleDropdownFormEmail1">Correo electronico</label>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@ejemplo.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormPassword1">Contraseña</label>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña" required />
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
                                <Link to='/registrarse' className="dropdown-item">
                                    ¿Eres nuevo? Registrate aqui
                                </Link>
                                <Link to='/recuperar-password' className="dropdown-item">
                                    ¿Olvidaste tu contraseña?
                                    </Link>
                            </ReactBootStrap.NavDropdown>
                            </>
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