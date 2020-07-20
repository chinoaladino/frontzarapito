import React, { useEffect, useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useUpdateProduct from '../hooks/useUpdateProduct';
import useFindProduct from '../hooks/UseFindProduct';
import { Link } from "wouter";
export default function UpdateProductos() {
    const [codigo, setCodigo] = useState('')
    const [stock, setStock] = useState('')
    const { updateproduct, hasUpdateError, succeedUpdate, errorUpdateMsj } = useUpdateProduct()
    const { findproduct, hasFindError, succeedFind, errorFindMsj, product } = useFindProduct()

    const handleSubmit = (e) => {
        e.preventDefault();
        updateproduct({ codigo, stock })
    };

    const handleSubmitFind = (e) => {
        e.preventDefault();
        findproduct({ codigo })

    };

    useEffect(() => {
        let codigo = localStorage.getItem('find')
        if (codigo !== null) {
            findproduct({ codigo })
            setCodigo(codigo)
            localStorage.removeItem('find')

        }
        if (succeedFind) {
            setStock(product)
        }
    }, [succeedFind, setStock])

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
                    <Link to='/gestionarproductos/editaproductos' className="nav-link active">
                        Modificar productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/gestionarproductos/eliminarproducto' className="nav-link">
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
                {
                    succeedFind
                        ?
                        <>
                            <form onSubmit={handleSubmit}>
                                {
                                    succeedUpdate
                                        ?
                                        <>
                                            {succeedUpdate &&
                                                <div className="alert alert-success alert-styled-left">
                                                    Se ha modificado el producto
                                            </div>
                                            }
                                        </>
                                        : <>
                                            {
                                                hasUpdateError
                                                    ?
                                                    <>
                                                        {hasUpdateError &&
                                                            <div className="alert alert-danger alert-styled-left">
                                                                {errorUpdateMsj.map(error => {
                                                                    return (
                                                                        <div key={error}>
                                                                            *{error} <br />
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        }
                                                    </>
                                                    : <div className="alert alert-success alert-styled-left">

                                                        Se ha encontrado el producto
                                                      </div>

                                            }
                                        </>

                                }

                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-2 col-fomr-label">Codigo</label>
                                    <div className="col-sm-10">
                                        <input type="number" onChange={(e) => setCodigo(e.target.value)} value={codigo} className="form-control" placeholder="Codigo" disabled />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-2 col-fomr-label">Stock</label>
                                    <div className="col-sm-10">
                                        <input type="number" onChange={(e) => setStock(e.target.value)} value={stock} className="form-control" placeholder="0" required />
                                    </div>
                                </div>
                                <button className="btn btn-primary" id="boton" type="submit">Modificar</button>
                            </form>
                        </>
                        : <>
                            <form onSubmit={handleSubmitFind}>
                                {
                                    hasFindError
                                        ?
                                        <>
                                            {hasFindError &&
                                                <div className="alert alert-danger alert-styled-left">
                                                    Codigo invalido
                                    </div>
                                            }
                                        </>
                                        : <div className="alert alert-primary alert-styled-left">
                                            Busque el producto por el codigo para modificarlo
                                </div>
                                }
                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-2 col-fomr-label">Codigo</label>
                                    <div className="col-sm-10">
                                        <input type="number" onChange={(e) => setCodigo(e.target.value)} value={codigo} className="form-control" placeholder="Codigo" required />
                                    </div>
                                </div>
                                <button className="btn btn-primary" id="boton" type="submit">Buscar</button>
                            </form>
                        </>
                }
            </div>
        </div>
    );

}

