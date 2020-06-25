import React, { Component } from 'react';



export default class Productos extends Component {

    state = {
    productos: []
    }


    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        this.setState({productos: data})
    }
    render() {
        return (
            <div className="col">
              <div className="row">
                {
                    this.state.productos.map(producto => {
                        return  <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
                                <div className="card" >
                                    <img className="card-img-top" src={producto.url} alt="Card image cap" style={{ height: "350px" }} />
                                    <div className="card-body">
                                        <h4 className="card-title"><a href="product.html" title="View Product">{producto.title}</a></h4>
                                        <p className="card-text">{producto.thumbnailUrl}</p>
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

                    })
                }
                </div>
            </div>
        )
    }
}
