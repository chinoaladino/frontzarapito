import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class RecPass extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{padding: "10px", borderRadius:" 10px", border: "1px solid #CED4DA"}}>
                    <form>
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
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                            </div>
                        </div>
                        <button className="btn btn-primary" id="boton"   type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RecPass;