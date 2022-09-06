import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import Product from './pages/Product.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import { useSelector } from "react-redux";


//FALTA HACER EL RESPONSIVE DE TODO MENOS DEL HOME. 

function App() {

  const user = useSelector(state => state.user.currentUser)

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}>
          <Route path="/products/:category" element={<ProductList/>}/>
        </Route>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>        
        <Route path="/register" element={<Register/>} />
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
