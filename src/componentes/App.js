import React, { Suspense } from "react";

import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Carro from './Carro';
import {
  Switch,
  Route
} from "wouter";
import Footer from './Footer';
import Inicio from './Inicio';
import Profile from './Perfil';
import Register from './Register';
import {UserContextProvider} from '../context/UserContext';


export default function App() {

  return (
    <UserContextProvider>
      <div className="App">
      <Suspense fallback={null}>

        <Navigation>
        </Navigation>
        <Switch>
          <Route component={Inicio} exact path="/">
          </Route>
          <Route component={Carro} exact path="/Carro">
          </Route>
          <Route component={Profile} exact path="/Perfil">
          </Route>
          <Route component={Register} exact path="/registrarse">
          </Route>
        </Switch>
        <Footer />
        </Suspense>

      </div>
    </UserContextProvider>
  );
}