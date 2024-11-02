import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../pages/user/Login';
import Register from '../pages/user/Register';

export default function UserRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/user/login' element={<Login />} />
                <Route path='/user/register' element={<Register />} />
            </Routes>
        </Router>
    )
}
