import Home from "./components/pages/home";
import Product from "./components/pages/product";
import ProductDetail from "./components/pages/productDetail";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={Product} />
        <Route path="/product" component={ProductDetail} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/about-us" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
