import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Link } from 'wouter';
import useLoginAdmin from '../hooks/useLoginAdmin';
import useLogin from '../hooks/useLoginAdmin';
import { useEffect } from "react";

export default function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [, navigate] = useLocation()
    const { loginAdmin, isLoggedAdmin, hasLoginError } = useLoginAdmin()
    const { isLogged } = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault();
        loginAdmin({ email, password })
    };
 
    useEffect(() => {
        const ac = new AbortController();
        if (sessionStorage.getItem('token') !== null){
            navigate('/')
        }
        return () => ac.abort();
    },  [])

    useEffect(() => {
        if (isLoggedAdmin) navigate('/')
    }, [isLoggedAdmin, navigate])

    return (
        <>
            <div className="container" style={{ padding: "2%", marginTop: "9px" }}>

            </div>
            <div className="container" style={{ border: "1px solid #CED4DA", padding: "10px", borderRadius: "10px", width:"400px" }}>
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
        </div>
        </>
    );
}