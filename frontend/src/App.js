import './App.css';
import {Routes,Route} from "react-router-dom";
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Component/Home';
import Products from './Component/Products';
import SingleProduct from './Component/SingleProduct';
import Cart from './Component/Cart';
import Addproduct from './Component/Addproduct';

function App() {
  return (
  <>
  <Routes>
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/" element={<Home />} />
    <Route exact path="/products" element={<Products />} />
    <Route exact path="/singleProduct" element={<SingleProduct />} />
    <Route exact path="/cart" element={<Cart />} />
    <Route exact path="/addProduct" element={<Addproduct />} />

  </Routes>
  </>
  );
}

export default App;
