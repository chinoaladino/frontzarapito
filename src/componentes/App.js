import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import Navigation from './Navigation';
import Productos from './Productos';


function App() {

  return (

    <div className="App">
      <Navigation>

      </Navigation>
      <div>
        <div style={{ width: "100%" }} >
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
          <Productos />
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
