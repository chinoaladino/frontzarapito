import React, { useEffect, useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAddProduct from '../hooks/useAddProduct';
import { Link } from "wouter";
import axios from 'axios';

export default function AddProduct() {

    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [stock, setStock] = useState('')
    const [foto, setFoto] = useState('')
    const [cat, setCat] = useState('')
    const [state, setState] = useState({ cate: [] })

    const { addproduct, hasAddError, succeedAdd, errorMsj } = useAddProduct()
    useEffect(() => {
        const ac = new AbortController();
        const datas = async () => {
            const res = await axios.get('https://api.zarapito.xyz/categorias/')
            setState({ cate: res.data })
        }
        datas()
        return () => ac.abort();
    }, [])

    useEffect(() => {
        if (succeedAdd) {
            setCodigo('')
            setNombre('')
            setPrecio('')
            setStock('')
            setFoto('')
        }
    }, [succeedAdd, setCat])

    const handleSubmit = (e) => {
        e.preventDefault();
        addproduct({ codigo, cat, nombre, precio, stock, foto })

    };

    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <ul className="nav nav-tabs" style={{ marginBottom: "10px" }}>
                <li className="nav-item">
                    <Link to='/gestionarproductos' className="nav-link">
                        Ver todos los productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/gestionarproductos/agregarproductos' className="nav-link active">
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
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Codigo</label>
                        <div className="col-sm-10">
                            <input type="number" onChange={(e) => setCodigo(e.target.value)} value={codigo} className="form-control" placeholder="Codigo" required></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label"> Categoria</label>
                        <div className="col-sm-10">
                            <select name="categorias" className="form-control" onChange={(e) => setCat(e.target.value)}>
                                <option>Seleccione categoria</option>

                                {
                                    state.cate.map(cat => (
                                        <option value={cat._id} key={cat._id}>{cat.nombre}</option>
                                    ))

                                }
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Nombre</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} className="form-control" placeholder="Nombre" required></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-2 col-fomr-label">Precio</label>
                        <div className="col-sm-10">
                            <input type="number" onChange={(e) => setPrecio(e.target.value)} value={precio} className="form-control" placeholder="Precio" required></input>
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

                            <label className="input-group-append mb-0">
                                <span className="btn btn-primary input-file-btn">
                                    Subir imagenes
                                <input type="file" hidden
                                        onChange={(e) => setFoto(e.target.files)}
                                        id="fotos" name="fotos"
                                        accept="image/png, image/jpeg"
                                        multiple="multiple"
                                        required />
                                </span>
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary" id="boton" type="submit">Registrar</button>
                </form>
            </div>

        </div>

    );
}


//mis pedidos

