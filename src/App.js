import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" >
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>      
      </nav>
      <div className="container mt-5">
        <span className="display-4">TITULO </span>
      </div>
    </div>
    </div>
  );
}

export default App;
