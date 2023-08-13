import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../../pages/Dashboard/AddProduct';
import Home from '../../pages/Dashboard/Home';
import Order from '../../pages/Dashboard/Order';

const ContentMain = () => {
    return (
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/add-products" element={<AddProduct/>}/>
                <Route path="/orders" element={<Order/>}/>

                
                <Route path="/demo2" element={<h2>I'm DEMOOO 2</h2>}>

                </Route>
            </Routes>
        </div>
    )
}
export default ContentMain;