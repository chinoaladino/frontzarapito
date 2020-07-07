import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MisProductos extends Component {
    render() {
        return (
            <div className="container">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://www.pepsico.cl/images/librariesprovider40/default-album/vb3_montaje-productos-pepsico2e33c3aeef576d378be6ff5000e253d8.jpg?sfvrsn=1" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Producto</h5>
                        <p className="card-text">Descripcion</p>
                        <button type="button" className="btn btn-success btn-sm">Modificar</button>
                        <button type="button" style={{marginLeft: "100px"}} className="btn btn-danger btn-sm">Eliminar</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default MisProductos;