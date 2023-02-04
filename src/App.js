import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ProductList} />
          <Route path="/details" element={Details} />
          <Route path="/cart" element={Cart} />
          <Route element={Default} />
        </Routes>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
