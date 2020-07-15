import React, { useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAddCategory from '../hooks/useAddCategory';
import {
    Switch,
    Route,
    Link
  } from "wouter";

export default function AddCategory() {

    const [categoria, setCategoria] = useState('')

    const { addcategory, hasAddError, succeedAdd, errorMsj } = useAddCategory()

    const handleSubmit = (e) => {
        e.preventDefault();
        addcategory({categoria})
    };

    return (
        <div className="container" style={{marginTop: "40px"}}>
            <ul className="nav nav-tabs" style={{marginBottom: "10px"}}>
            <li className="nav-item">
                    <Link to='/gestionarproductos' className="nav-link">
                        Ver todos los productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/gestionarproductos/agregarproductos' className="nav-link">
                        Agregar productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='' className="nav-link">
                        Buscar productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='' className="nav-link">
                        Modificar productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='' className="nav-link">
                        Eliminar productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/gestionarproductos/agregarcategoria' className="nav-link active">
                        Agregar categorias
                    </Link>
                </li>
            </ul>
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
                        Se ha registrado la categoria
                                    </div>
                }
               
                
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-fomr-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => setCategoria(e.target.value)} value={categoria} className="form-control" placeholder="Nombre" required></input>
                    </div>
                </div>
                <button className="btn btn-primary" id="boton" type="submit">Registrar</button>
            </form>
        </div>
            
            </div>
        
    );
}


//mis pedidos

