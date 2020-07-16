import React, { useEffect ,useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useDeleteProduct from '../hooks/useDeleteProduct';
import { Link } from "wouter";

export default function DeleteProduct() {

    const [codigo, setCodigo] = useState('')

    const { deleteproduct, hasDeleteError, succeedDelete, errorMsj } = useDeleteProduct()

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteproduct({ codigo })
    };

    useEffect(() => {
        if (succeedDelete ){
            setCodigo('')

        } 
    }, [succeedDelete, setCodigo])

    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <ul className="nav nav-tabs" style={{ marginBottom: "10px" }}>
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
                    <Link to='/gestionarproductos/editaproductos' className="nav-link">
                        Modificar productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/gestionarproductos/eliminarproducto' className="nav-link active">
                        Eliminar productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/gestionarproductos/agregarcategoria' className="nav-link">
                        Agregar categorias
                    </Link>
                </li>
            </ul>
            <div className="container" style={{ border: "1px solid #CED4DA", padding: "20px", borderRadius: "10px" }}>
                <form onSubmit={handleSubmit}>
                    {hasDeleteError &&
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
                    {succeedDelete &&
                        <div className="alert alert-success alert-styled-left">
                            Se ha eliminado el producto
                        </div>
                    }
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Codigo</label>
                        <div className="col-sm-10">
                            <input type="number" onChange={(e) => setCodigo(e.target.value)} value={codigo} className="form-control" placeholder="Codigo" required/>
                        </div>
                    </div>
                    <button className="btn btn-primary" id="boton" type="submit">Eliminar</button>
                </form>
            </div>
        </div>

    );
}


