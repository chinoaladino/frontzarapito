import React, { useState, useEffect } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSignup from '../hooks/useSignup';
import { useLocation } from 'wouter';


export default function Register() {
    const [rut, setRut] = useState('')
    const [email, setEmail] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [, navigate] = useLocation()

    const { signup, hasSignError, succeedSign, errorMsj } = useSignup()


    useEffect(() => {
        const ac = new AbortController();
        if (sessionStorage.getItem('tokenadmin') === null && sessionStorage.getItem('token') ){
            navigate('/')
        }
        return () => ac.abort();
    },  [])

    const handleSubmit = (e) => {
        e.preventDefault();
        signup({ rut, email, nombre, apellido, telefono, password1, password2 })
    };
    return (
        <div className="container mt-3" style={{ border: "1px solid #CED4DA", padding: "20px", borderRadius: "10px" }}>
            <form onSubmit={handleSubmit}>
                {hasSignError &&
                    <div className="alert alert-danger alert-styled-left">
                        {errorMsj.map(error => {
                            return (
                                <div key={error}>
                                    *{error} <br />
                                </div>
                            )
                        })}

                    </div>
                }
                {succeedSign &&
                    <div className="alert alert-success alert-styled-left">
                        Se ha registrado satisfactoriamente
                    </div>
                }
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-fomr-label">Rut</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => setRut(e.target.value)} value={rut} className="form-control" placeholder="Rut" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                        Correo
                        </label>
                    <div className="col-sm-10">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="inputEmail3" placeholder="Correo electronico" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-fomr-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} className="form-control" placeholder="Nombre" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-fomr-label">Apellido</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} className="form-control" placeholder="Apellido" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-fomr-label">Telefono</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono} className="form-control" placeholder="Telefono" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Contraseña</label>
                    <div className="col-sm-10">
                        <input type="password" onChange={(e) => setPassword1(e.target.value)} value={password1} className="form-control" id="inputPassword3" placeholder="Contraseña" required />

                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirme contraseña</label>
                    <div className="col-sm-10">
                        <input type="password" onChange={(e) => setPassword2(e.target.value)} value={password2} className="form-control" id="inputPassword3" placeholder="Confirme contraseña" required />

                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check" style={{ marginLeft: "740px" }}>
                        <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck2" required />
                        <label className="form-check-label" htmlFor="invalidCheck2">
                            Aceptas las condiciones y terminos del servicio
                            </label>
                    </div>
                </div>
                <button className="btn btn-primary" id="boton" type="submit">Registrar</button>
            </form>
        </div>

    );

}
