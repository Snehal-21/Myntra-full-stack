import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Component/Home';
import Products from './Component/Products';
import SingleProduct from './Component/SingleProduct';
import Cart from './Component/Cart';

function App() {
  return (
  <>
  <Routes>
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/products" element={<Products />} />
    <Route exact path="/singleProduct" element={<SingleProduct />} />
    <Route exact path="/cart" element={<Cart />} />
  </Routes>
  </>
  );
}

export default App;
