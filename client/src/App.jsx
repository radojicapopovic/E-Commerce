import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/product/:id" element={<Product/>}>
        </Route>
        <Route path="/products/:category" element={<ProductList/>}>
        </Route>
        <Route path="/cart" element={<Cart/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/register" element={<Register/>}> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;