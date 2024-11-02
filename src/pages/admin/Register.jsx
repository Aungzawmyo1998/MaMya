import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'

// css
import '../../styles/admin/register.css'

export default function Register() {

    const [adminData, setAdminData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: ""
    });

    const inputHandler = (e) => {
        const {name, value} = e.target;

        setAdminData( prev => (
            {...prev, [name]: value}
        ));
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8383/admin/register', { 
                name: adminData.name,
                email: adminData.email,
                password: adminData.password,
                phone: adminData.phone,
                address: adminData.address,
                role: adminData.role
            });

        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    // to check role select
    const [validRole, setValidRole] = useState(false);
    useEffect(()=> {
        if ( adminData.role  ) {
            setValidRole(true);
        }
    },[adminData.role]);
    

    return (
        <div id='adminRegister'>
            <div className="register-container">
                <div className="header">
                    <h1>Admin Register</h1>
                    <div className="icon-cont">
                        <FontAwesomeIcon icon={faUser} className='icon' />
                    </div>
                </div>
                <form className='form-container' onSubmit={submitHandler} >
                    <div className="row">
                        <label htmlFor="name" className='field-name'> Name  </label>
                        <input id='name' type="text" className='input' name='name' onChange={inputHandler} />
                    </div>

                    <div className="row">
                        <label htmlFor="email" className='field-name'> Email  </label>
                        <input id='email' type="text" className='input' name='email' onChange={inputHandler} />
                    </div>

                    <div className="row">
                        <label htmlFor="password" className='field-name'> Password  </label>
                        <input id='password' type="text" className='input' name='password' onChange={inputHandler} />
                    </div>

                    <div className="row">
                        <label htmlFor="phone" className='field-name'> Phone  </label>
                        <input id='phone' type="text" className='input' name='phone' onChange={inputHandler} />
                    </div>
                    <div className="row">
                        <label htmlFor="address" className='field-name'> Address  </label>
                        <textarea id='address' type="text" className='input address' name='address' onChange={inputHandler} />
                    </div>
                    <div className="row">
                        <label htmlFor="role" className='field-name'> Role  </label>
                        {/* <input id='role' type="text" className='input'/> */}
                        <select id="role" className='input' name='role' onChange={inputHandler} defaultValue="nothing">
                            <option value="nothing" disabled >Please Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="staff">Staff</option>
                        </select>
                    </div>
                    
                    <div className="button-container">
                        <button 
                        disabled={ !validRole }
                        className='register-btn'
                        >Register</button>
                        <button className='cancel-btn' type='button'>Cancel</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
