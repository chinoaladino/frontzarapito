import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid="true" className="mt-5" >
                    <footer className="page-footer font-small special-color-dark pt-4">
                        <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/"> Zarapito</a>
                        </div>
                    </footer>
                </Container>
            </div>
        );
    }
}
export default Footer;