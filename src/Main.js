import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";


 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>           
            <h1>Ethel's Banana Pudding</h1>
            <ul className="header">
            <li><NavLink  to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/contact ">Contact </NavLink></li>
            </ul>
            <div className="content">
            <Routes>
            <Route path="/" element={<Home />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/contact" element={<Contact />}/>
              </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;