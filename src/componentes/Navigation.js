import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="br-dark dark">
                <ReactBootStrap.Navbar.Brand href="/">
                    Grandiosa
                </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="#features">
                            Features
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#Pricing">
                            Pricing
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.NavDropdown tittle="Dropdown" id="collasible-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                                Action
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                                Otra Action
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                                Mas Action
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.Dropdown.Divider>
                                <ReactBootStrap.Dropdown.Item href="#action/3.3">
                                    Item del divider
                                </ReactBootStrap.Dropdown.Item>
                            </ReactBootStrap.Dropdown.Divider>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="#deets">
                            More deets
                        </ReactBootStrap.Nav.Link>
                        
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        );
    }
}
export default Navigation;