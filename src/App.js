import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';

//import DetailComp from './Component/Fungsional/DetailComp';



//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <switch>
      <Route exact path="/" component={HomePage} />
        



       {/*<Route exact path="/detail/:id" component={DetailComp} />*/}
      </switch>
    </BrowserRouter>




  );
}

export default App;