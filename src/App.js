import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Ul , Container } from 'react-bootstrap'

function App() {

  return (

    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: "90px", justifyContent: "center" }} >
        <div className="row">
          <div className="col-4 col-md-4" style={{ marginRight: "110px" }} >
            <div className="input-group" >
              <span className="input-group-prepend">
                <div className="input-group-text bg-transparent border-right-0"><i className="fa fa-search" ></i></div>
              </span>
              <input className="form-control py-2 border-left-0 border" type="search" id="example-search-input" />
              <span className="input-group-append">
                <button className="btn btn-outline-secondary border-left-0 border" type="button">
                  Buscar
                </button>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-1" style={{ marginRight: "20px" }}>
            <h1 >Zarapito</h1>

          </div>
          <div className="col-6 col-md-1" style={{ marginLeft: "190px" }} >
            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle btn-light" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Iniciar Sesion
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <form className="px-4 py-3">
                  <div className="form-group">
                    <label for="exampleDropdownFormEmail1">Correo electronico</label>
                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@ejemplo.com" />
                  </div>
                  <div className="form-group">
                    <label for="exampleDropdownFormPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña" />
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                      <label className="form-check-label" for="dropdownCheck">
                        Recordar
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
                <div className="dropdown-divider"></div>
                <a href="/" className="dropdown-item" >New around here? Sign up</a>
                <a href="/" className="dropdown-item" >Forgot password?</a>
              </div>

            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: "60px", justifyContent: "center" }} >
        <div className="fixed-nav fixed-nav--center">
          <div className="container" style={{ margin: "auto" }}>


            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Novedades
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Lencería
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Ropa de dormir
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Ofertas
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Colecciones
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
          </div>
        </div>
      </nav>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/imagen1.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/imagen2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/imagen3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>


      <Container>
        <p className="display-4">Productos</p>
      </Container>
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
