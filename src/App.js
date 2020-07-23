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
import LoginComp from './Component/Fungsional/LoginComp';
import DaftarComp from './Component/Fungsional/RegisterComp';
import ListBarangMasukComp from './Component/Class/ListBarangMasukComp';
import TambahBarangMasukComp from './Component/Class/TambahBarangMasukComp';
import EditBarangMasukComp from './Component/Class/EditBarangMasukComp';
import ListBarangKeluarComp from './Component/Class/ListBarangKeluarComp';
import TambahBarangKeluarComp from './Component/Class/TambahBarangKeluarComp';
import EditBarangKeluarComp from './Component/Class/EditBarangKeluarComp';
import RegisterComp from './Component/Fungsional/RegisterComp';


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
      <Route exact path="/" component={LoginComp} />
      <Route exact path="/HomePage" component={HomePage} />
      <Route exact path="/register" component={RegisterComp}/>
      <Route exact path="/obat" component={ListComp} />
      <Route exact path="/barangmasuk" component={ListBarangMasukComp} />
      <Route exact path="/barangkeluar" component={ListBarangKeluarComp} />
      <Route exact path="/obat/tambah" component={TambahComp} />
      <Route exact path="/obat/edit" component={EditComp} />
      <Route exact path="/admin" component={ListAdminComp} />
      <Route exact path="/admin/tambahadmin" component={TambahAdminComp} />
      <Route exact path="/barangmasuk/tambahbarangmasuk" component={TambahBarangMasukComp} />
      <Route exact path="/barangkeluar/tambahbarangkeluar" component={TambahBarangKeluarComp} />
      <Route exact path="/admin/edit" component={EditAdminComp} />
      <Route exact path="/barangmasuk/edit" component={EditBarangMasukComp} />
      <Route exact path="/barangkeluar/edit" component={EditBarangKeluarComp} />
      <Route exact path="/supplier" component={ListSupplierComp} />
      <Route exact path="/supplier/tambahsupplier" component={TambahSupplierComp} />
      <Route exact path="/supplier/edit" component={EditSupplierComp} />
       {/*<Route exact path="/detail/:id" component={DetailComp} />*/}
      </switch>
    </BrowserRouter>




  );
}

export default App;