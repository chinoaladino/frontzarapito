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
import RecPass from './RecPass';
import AddProduct from './AddProduct';
import ShowAllProducts from './ShowAllProducts';
import MisProductos from './MisProductos';
import UpdateProductos from './UpdateProducts';
import useLogin from '../hooks/useLogin';
import LoginAdmin from './LoginAdmin';
import AddCategory from './AddCategory';
import { UserContextProvider } from '../context/UserContext';
import { UserContextProviderAdmin } from '../context/UserContextAdmin';


export default function App() {

  const { loginAdmin, logout, isLoggedAdmin, hasLoginError } = useLogin()


  return (
    <UserContextProviderAdmin>
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
              <Route component={RecPass} exact path="/recuperar-password">
              </Route>
              <Route component={LoginAdmin} exact path="/Admin">
              </Route>
              <Route component={UpdateProductos} exact path="/editaproductos">
              </Route>
              <Route component={AddProduct} exact path="/gestionarproductos/agregarproductos">
              </Route>
              <Route component={ShowAllProducts} exact path="/gestionarproductos">
              </Route>
              <Route component={MisProductos} exact path="/mostrarproductos">
              </Route>
              <Route component={AddCategory} exact path="/gestionarproductos/agregarcategoria">
              </Route>

            </Switch>
            <Footer />
          </Suspense>
        </div>
      </UserContextProvider>
    </UserContextProviderAdmin>

  );
}