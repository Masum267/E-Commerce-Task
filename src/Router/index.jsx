import { BrowserRouter as Router,Route,Routes, HashRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Login from "../component/Dashboard/Login";
import PrivateLayout from "../layout/Dashboard/PrivateOutlet";
import { Outlet } from "react-router-dom";
import Home from "../layout/Ecommerce/Home";
import Navbar from "../layout/Ecommerce/Navbar";
import Products from "../layout/Ecommerce/Products"
import About from "../layout/Ecommerce/About";
import Product from "../layout/Ecommerce/Product"
import Order from "../pages/Dashboard/Order";
import Customer from "../pages/Dashboard/Customer";



const MyRouter=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path='/products/:id' element={<Product/>} />
                <Route path="/about" element={<Customer/>}/>
                <Route path="/login" element={<h2>User Login.</h2>}/>
                
                <Route path="/dashboard/login" element={<Login />} />
                <Route element={<PrivateLayout />}>
                    <Route path='/dashboard/*' element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default MyRouter