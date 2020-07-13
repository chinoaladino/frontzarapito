import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Link } from 'wouter';
import useLogin from '../hooks/useLogin';
import { useEffect } from "react";

export default function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [, navigate] = useLocation()
    const { loginAdmin, isLogged, hasLoginError } = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault();
        loginAdmin({ email, password })
    };

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    return (
        <>
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

            <Link to='/recuperar-password' className="dropdown-item">
                ¿Olvidaste tu contraseña?
            </Link>
        </>
    );
}