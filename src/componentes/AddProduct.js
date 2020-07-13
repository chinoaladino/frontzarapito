import React, { useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAddProduct from '../hooks/useAddProduct';


export default function AddProduct() {

    const [nombre, setNombre] = useState('')
    const [codigo, setCodigo] = useState('')
    const [stock, setStock] = useState('')
    const [foto, setFoto] = useState('')

    const { addproduct, hasAddError, succeedAdd, errorMsj } = useAddProduct()

    const handleSubmit = (e) => {
        e.preventDefault();
        addproduct({ nombre, codigo, stock, foto })
    };


    return (
        <div className="container" style={{ border: "1px solid #CED4DA", padding: "20px", borderRadius: "10px" }}>
            <form onSubmit={handleSubmit}>
                {hasAddError &&
                    <div className="alert alert-danger alert-styled-left">
                        {errorMsj.map(error => {
                            return (
                                <div key={error}>
                                    *{error} <br />
                                </div>
                            )
                        })}                     </div>
                }
                {succeedAdd &&
                    <div className="alert alert-success alert-styled-left">
                        El registro del producto fue exitoso
                                    </div>
                }
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-fomr-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} className="form-control" placeholder="Nombre" required></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-fomr-label">Codigo</label>
                    <div className="col-sm-10">
                        <input type="number" onChange={(e) => setCodigo(e.target.value)} value={codigo} className="form-control" placeholder="Codigo" required></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-fomr-label">Stock</label>
                    <div className="col-sm-10">
                        <input type="number" onChange={(e) => setStock(e.target.value)} value={stock} className="form-control" placeholder="0" required></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-fomr-label">Fotos</label>
                    <div className="col-sm-10">
                        <input type="file"
                            onChange={(e) => setFoto(e.target.files[0])}
                            id="fotos" name="fotos"
                            accept="image/png, image/jpeg" required />
                    </div>
                </div>
                <button className="btn btn-primary" id="boton" type="submit">Registrar</button>
            </form>
        </div>
    );
}


//mis pedidos

