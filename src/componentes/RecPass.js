import React, { useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useRecoveryPass from '../hooks/useRecoveryPass';

export default function RecPass() {
    const [email, setEmail] = useState("")
    const { recoveryPass, hasRecoveryError, succeedRecovery, errorMsj } = useRecoveryPass()

    const handleSubmit = async (e) => {
        e.preventDefault();
        recoveryPass({ email })
    };

    return (
        <>
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Recuperar contraseña </h3>

                    <div className="card-text">
                        <form onSubmit={handleSubmit}>
                        {hasRecoveryError &&
                    <div className="alert alert-danger alert-styled-left">
                        {errorMsj.map(error => {
                            return (
                                <div key={error}>
                                    *{error} <br />
                                </div>
                            )
                        })}                     </div>
                }
                {succeedRecovery &&
                    <div className="alert alert-success alert-styled-left">
                        La solicitud fue exitosa
                                    </div>
                }
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Ingrese su correo electrónico y le enviaremos un enlace para restablecer su contraseña.</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control form-control-sm" placeholder="Ingrese su correo electrónico" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Enviar solicitud</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

