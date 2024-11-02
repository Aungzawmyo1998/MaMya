import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faBell} from '@fortawesome/free-solid-svg-icons'

//import css
import '../../styles/admin/header.css'

export default function Header() {
    return (
        <div id='adminHeader'>
            <div className="header-container">
                <div className="logo">Logo</div>
                <div className="profile-container">
                    <span className='icon'><FontAwesomeIcon icon={faBell} /></span>
                    <span className='icon'><FontAwesomeIcon icon={faCircleUser} /></span>
                </div>
            </div>
        </div>
    )
}
