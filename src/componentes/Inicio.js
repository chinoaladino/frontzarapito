import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import Productos from './Productos';

class Inicio extends Component {
    render() {
        return (
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

                <Container>
                    <p className="display-4">Productos</p>
                </Container>

                <Container>
                    <Productos/>
                </Container>
            </div>
        );
    }
}
export default Inicio;