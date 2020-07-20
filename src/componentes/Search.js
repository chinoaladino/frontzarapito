import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useLocation,
    Link
} from "wouter";
import axios from 'axios';
import useDeleteProduct from '../hooks/useDeleteProduct';

export default function Search() {
    const [state, setState] = useState({ products: [] })
    const { deleteproduct, hasDeleteError, succeedDelete, errorMsj } = useDeleteProduct()
    const [, navigate] = useLocation()

    useEffect( () => {
        const ac = new AbortController();
        let busqueda = localStorage.getItem('busqueda')
        if (busqueda !== null) {
            const datas = async () => {
                const res = await axios.get('https://api.zarapito.xyz/productos/n/' + busqueda)
                setState({ products: res.data })
            }
            datas()
        } else {
            const datas = async () => {
                const res = await axios.get('https://api.zarapito.xyz/productos')
                setState({ products: res.data })
            }
            datas()
        }
        localStorage.removeItem('busqueda')
        return () => ac.abort();
    }, [setState])

    const algo = (carro) => {
        const ac = new AbortController();
        let carros = []
        let bo = false
        let token = localStorage.getItem('token')
        if (localStorage.getItem('token') !== null) {
            const res1 = axios.post('https://api.zarapito.xyz/carrito/'+token)
            console.log(res1.data)
        }
       /* if (localStorage.getItem('token') !== null) {
            let cantidad = 1
            const res2 = axios.post('http://localhost:3000/producto/' + carro, cantidad, {
                headers: { Authorization: "Bearer " + token }
            })
            this.setState({ productos: res2.data })

        }*/ else {
            if (localStorage.getItem('carro') !== null) {
                carros = JSON.parse(localStorage.getItem('carro'))
            }
            for (let i = 0; i < carros.length; i++) {
                if (carros[i] === carro) {
                    bo = true
                    i = carros.length

                }

            }

            if (bo !== true) {
                carros.push(carro)
                localStorage.setItem('carro', JSON.stringify(carros))
                console.log(localStorage.getItem('carro'))
            } else {
                console.log('existe')
            }
        }

    }

    return (
        <>
            <div className="container" style={{ marginTop: "40px" }}>
                <div className="container">
                    <div className="col">
                        <div className="row">
                            {
                                state.products.map(product => (
                                    <div className="col-12 col-md-6 col-lg-4" key={product.codigo}>
                                        <div className="card" >
                                            <img className="card-img-top" src={"https://api.zarapito.xyz"+product.fotos} alt="Card image cap" style={{ height: "350px" }} />
                                            <div className="card-body">
                                                <h4 className="card-title"><a href="product.html" title="View Product">{product.nombre}</a></h4>
                                                <p className="card-text">{product.stock}</p>
                                                <div className="row">
                                                    <div className="col">
                                                        <button className="btn btn-danger btn-block" >${product.precio}</button>
                                                    </div>
                                                    <div className="col">
                                                        <button className="btn btn-success btn-block" onClick={() => algo(product.codigo)}>Agregar al carro</button>
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