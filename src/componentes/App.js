import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import Navigation from './Navigation';



function App() {

  return (

    <div className="App">
      <Navigation>
        
      </Navigation>
      <div>
        <div style={{ width: "100%"}} >
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/3.jpg"
                alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/2.webp"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/1.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

    

        <Container>
          <p className="display-4">Productos</p>
        </Container>
      
      <div>
        <Container>

          <div className="col">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" style={{ height: "350px" }} />
                  <div className="card-body">
                    <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">99.00 $</p>
                      </div>
                      <div className="col">
                        <a href="/" class="btn btn-success btn-block">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" style={{ height: "350px" }} />
                  <div className="card-body">
                    <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">99.00 $</p>
                      </div>
                      <div className="col">
                        <a href="/" class="btn btn-success btn-block">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" style={{ height: "350px" }} />
                  <div className="card-body">
                    <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">99.00 $</p>
                      </div>
                      <div className="col">
                        <a href="/" class="btn btn-success btn-block">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" style={{ height: "350px" }} />
                  <div className="card-body">
                    <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">99.00 $</p>
                      </div>
                      <div className="col">
                        <a href="/" class="btn btn-success btn-block">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" style={{ height: "350px" }} />
                  <div className="card-body">
                    <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">99.00 $</p>
                      </div>
                      <div className="col">
                        <a href="/" class="btn btn-success btn-block">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" style={{ height: "350px" }} />
                  <div className="card-body">
                    <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">99.00 $</p>
                      </div>
                      <div className="col">
                        <a href="/" class="btn btn-success btn-block">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" style={{ height: "350px" }} />
                  <div className="card-body">
                    <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">99.00 $</p>
                      </div>
                      <div className="col">
                        <a href="/" class="btn btn-success btn-block">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" style={{ height: "350px" }} />
                  <div className="card-body">
                    <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">99.00 $</p>
                      </div>
                      <div className="col">
                        <a href="/" class="btn btn-success btn-block">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>

      <Container fluid="true" className="mt-5" >
        <footer className="page-footer font-small special-color-dark pt-4">



          <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> Zarapito</a>
          </div>

        </footer>
      </Container>

    </div>
  );


}


export default App;
