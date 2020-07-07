import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddProduct extends Component {
    render() {
        return (
            <div className="container" style={{ border: "1px solid #CED4DA", padding: "20px", borderRadius: "10px" }}>
                <form>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Codigo</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Codigo"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Nombre</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Nombre"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Descripcion</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Descripcion"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Stock</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" placeholder="0"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Fotos</label>
                        <div className="col-sm-10">
                            <input type="file"
                                id="fotos" name="fotos"
                                accept="image/png, image/jpeg" />
                        </div>
                    </div>
                    <button className="btn btn-primary" id="boton" type="submit">Registrar</button>
                </form>
            </div>
        );
    }
}

export default AddProduct;