import React from 'react'
import {Link} from 'react-router-dom'

//css
import "../../styles/admin/nav_bar.css";

export default function NavBar() {
    return (
        <div id='navBar'>
            <div className="nav-container">
                <ul className="nav-bar">
                    <li><Link className='nav-item' to="/admin/home" >Web Development</Link></li>
                    <li><Link className='nav-item' to="/admin/course/webDevelopment" >Web Design</Link></li>
                    <li><Link className='nav-item' to="/admin/course/webDevelopment" >PHP</Link></li>
                    <li><Link className='nav-item' to="/admin/course/webDevelopment" >Network</Link></li>
                    <li><Link className='nav-item' to="/admin/course/webDevelopment" >A+</Link></li>
                    <li><Link className='nav-item' to="/admin/course/laravel" >Laravel</Link></li>

                </ul>
            </div>
        </div>
    )
}
