import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages 
import Register from '../pages/admin/Register';
import Login from '../pages/admin/Login';
import Home from '../pages/admin/Home';

export default function AdminRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/admin/register' element={<Register />} />
                <Route path='/admin/login' element={ <Login /> } />
                <Route path='/admin/home' element={<Home />} />
                <Route path='/admin/course/webDevelopment' element= {Home} />
            </Routes>
        </Router>
    )
}
