import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Carro from './Carro';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Footer';
import Inicio from './Inicio';

function App() {

  return (

    <div className="App">
      <Navigation>
      </Navigation>
      <Router>
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route exact path="/Carro">
            <Carro />
          </Route>
          <Route exact path="/Perfil">
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>

  );


}


export default App;
