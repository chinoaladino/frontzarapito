import React from 'react';
import './App.css';
import Collapsible from 'react-collapsible';
import ReactDOM from 'react-dom';


import Dropdown from './Dropdown';

function App() {

  return (

    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: "90px", justifyContent:"center"}} >
        <div className="row">
          <div className="col-4 col-md-4" style={{ marginRight:"110px" }} >
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
        
        <div className="col-6 col-md-1" style={{ marginRight:"20px"  }}>
          <h1 >Zarapito</h1>

        </div>
        <div className="col-6 col-md-1" style={{ marginLeft:"190px"  }} >
          <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle btn-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
              <a className="dropdown-item" href="#">New around here? Sign up</a>
              <a className="dropdown-item" href="#">Forgot password?</a>
            </div>

          </div>
        </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: "60px", justifyContent: "center" }} >
        <div className="fixed-nav fixed-nav--center">
          <div className="container" style={{ margin: "auto" }}>


            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Novedades
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Lencería
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Ropa de dormir
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Ofertas
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
            <div className="dropdown">
              <a className="btn btn-secondary  btn-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Colecciones
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
            <div className="dropdown">
              <a className="btn btn-secondary btn-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>
                Outlet
            </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              </div>

            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <span className="display-4">TITULO </span>
        <span className="display-2">Subtitulo</span>
      </div>
    </div>

  );


}


export default App;
