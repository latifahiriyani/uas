import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import ListAdminComp from './Component/Class/ListAdminComp';
import TambahAdminComp from './Component/Class/TambahAdminComp';
import EditAdminComp from './Component/Class/EditAdminComp';
import ListSupplierComp from './Component/Class/ListSupplierComp';
import TambahSupplierComp from './Component/Class/TambahSupplierComp';
import EditSupplierComp from './Component/Class/EditSupplierComp';
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
      <Route exact path="/obat" component={ListComp} />
      <Route exact path="/obat/tambah" component={TambahComp} />
      <Route exact path="/obat/edit" component={EditComp} />
      <Route exact path="/admin" component={ListAdminComp} />
      <Route exact path="/admin/tambahadmin" component={TambahAdminComp} />
      <Route exact path="/admin/edit" component={EditAdminComp} />
      <Route exact path="/supplier" component={ListSupplierComp} />
      <Route exact path="/supplier/tambahsupplier" component={TambahSupplierComp} />
      <Route exact path="/supplier/edit" component={EditSupplierComp} />
       {/*<Route exact path="/detail/:id" component={DetailComp} />*/}
      </switch>
    </BrowserRouter>




  );
}

export default App;