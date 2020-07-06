import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends Component {
    render() {
        return (

            <div className="container mt-3" style={{ border: "1px solid #CED4DA", padding: "20px", borderRadius: "10px" }}>
                <form>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Rut</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Rut"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Correo
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Correo electronico">
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Nombre</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Nombre"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Apellido</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Apellido"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Telefono</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Telefono"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
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
}
export default Register;
