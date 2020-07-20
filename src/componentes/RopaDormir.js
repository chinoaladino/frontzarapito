import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useLocation,
    Link
} from "wouter";
import axios from 'axios';
import useDeleteProduct from '../hooks/useDeleteProduct';

export default function ManageProducts() {
    const [state, setState] = useState({ products: [] })
    const { deleteproduct, hasDeleteError, succeedDelete, errorMsj } = useDeleteProduct()
    const [, navigate] = useLocation()

    useEffect(() => {
        const ac = new AbortController();
        const datas = async () => {
            const res = await axios.get('https://api.zarapito.xyz/categoria/ropa de dormir')
            setState({ products: res.data })
        }
        datas()
        return () => ac.abort();
    }, [setState])

    const handleClickDelete = (codigo) => {
        deleteproduct({ codigo })
    }

    const handleClickUpdate = (codigo) => {

        localStorage.setItem('find', codigo)
        navigate('/gestionarproductos/editaproductos')
    }

    return (
        <>
            <div className="container" style={{ marginTop: "40px" }}>
                <ul className="nav nav-tabs" style={{ marginBottom: "10px" }}>
                    <li className="nav-item">
                        <Link to='/lenceria' className="nav-link active">
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
                <div className="container">
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
                    <div className="col">
                        <div className="row">
                            {
                                state.products.map(product => (
                                    <div className="col-12 col-md-6 col-lg-4" key={product.codigo}>
                                        <div className="card" >
                                            <img className="card-img-top" src={product.fotos} alt="Card image cap" style={{ height: "350px" }} />
                                            <div className="card-body">
                                                <h4 className="card-title"><a href="product.html" title="View Product">{product.nombre}</a></h4>
                                                <p className="card-text">{product.stock}</p>
                                                <div className="row">
                                                    <div className="col">
                                                        <button onClick={() => handleClickDelete(product.codigo)} className="btn btn-danger btn-block" >Eliminar</button>
                                                    </div>
                                                    <div className="col">
                                                        <button onClick={() => handleClickUpdate(product.codigo)} className="btn btn-warning btn-block">Editar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}