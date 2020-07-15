import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import {
    Switch,
    Route,
    Link
  } from "wouter";
  import MisProductos from './MisProductos';
import UpdateProductos from './UpdateProducts';
import AddProduct from './AddProduct';

export default function ManageProducts() {
    return (
        <>
        <div className="container" style={{marginTop: "40px"}}>
            <ul className="nav nav-tabs">
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
                    <Link to='/gestionarproductos/agregarcategoria' className="nav-link">
                        Agregar categorias
                    </Link>
                </li>
            </ul>
            
            </div>
        </>
    )

}