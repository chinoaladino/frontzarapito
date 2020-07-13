import React, { Component } from 'react';
import axios from 'axios';



export default class Productos extends Component {

    state = {
        productos: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/productos')
        this.setState({ productos: res.data })
    }
    render() {
        return (
            <div className="col">
                <div className="row">
                    {
                        this.state.productos.map(producto => (
                            <div className="col-12 col-md-6 col-lg-4" key={producto._id}>
                                <div className="card" >
                                    <img className="card-img-top" src={producto.fotos} alt="Card image cap" style={{ height: "350px" }} />
                                    <div className="card-body">
                                        <h4 className="card-title"><a href="product.html" title="View Product">{producto.nombre}</a></h4>
                                        <p className="card-text">{producto.stock}</p>
                                        <div className="row">
                                            <div className="col">
                                                <p className="btn btn-danger btn-block">99.00 $</p>
                                            </div>
                                            <div className="col">
                                                <a href="/" className="btn btn-success btn-block">Add to cart</a>
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
