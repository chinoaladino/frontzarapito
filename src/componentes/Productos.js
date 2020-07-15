import React, { Component } from 'react';
import axios from 'axios';




export default class Productos extends Component {

    state = {
        productos: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:3000/productos')
        this.setState({ productos: res.data })
    }
    algo(carro){
        let carros = []
        let bo = false
        if (localStorage.getItem('carro')!== null) {
            carros =  JSON.parse(localStorage.getItem('carro'))
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
            alert(carro)
            console.log(localStorage.getItem('carro'))
        }else{
            console.log('existe')
        }
       
    }
    
    render() {
        return (
            <div className="col">
                <div className="row">
                    {
                        this.state.productos.map(producto => (
                            <div className="col-12 col-md-6 col-lg-4" key={producto.codigo}>
                                <div className="card" >
                                    <img className="card-img-top" src={producto.fotos} alt="Card image cap" style={{ height: "350px" }} />
                                    <div className="card-body">
                                        <h4 className="card-title"><a href="product.html" title="View Product">{producto.nombre}</a></h4>
                                        <p className="card-text">{producto.stock}</p>
                                        <div className="row">
                                            <div className="col">
                        <button className="btn btn-danger btn-block" >${producto.precio}</button>
                                            </div>
                                            <div className="col">
                                               <button className="btn btn-success btn-block" onClick={() => this.algo(producto.codigo)}>Agregar al carro</button> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                        )
                    }
                </div>
            </div>
        )
    }
}
