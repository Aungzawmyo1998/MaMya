import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

// css
import '../../styles/admin/login.css'


export default function Login() {
    const [adminData, setAdminData] = useState({
        email: "",
        password: ""
    });

    const submitHandler = async (e) => {
        e.preventDefault();

        try {

            const res = await axios.post('http://127.0.0.1:8383/admin/login', {
                email: adminData.email,
                password: adminData.password
            });
            console.log(res.data.message)
            
        } catch (error) {
            console.log(error.response.data.message);
            // if(error.response.data.message)
        }
    }

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setAdminData((prev) => {
            return {...prev, [name]: value}
        });
    }

    return (
        <div id='adminLogin'>
            <div className="login-container">
                    <div className="header">
                        <h1>Login</h1>
                        <div className="icon-cont">
                            <FontAwesomeIcon icon={faUser} className='icon' />
                        </div>
                    </div>
                    <form className='form-container' onSubmit={submitHandler} >
                        <div className="row">
                            <label htmlFor="username" className='field-name' > Email or User Name</label>
                            <input type="text" className='input' name='email' onChange={inputHandler}  required/>
                        </div>
                        <div className="row">
                            <label htmlFor="password" className='field-name'> Password</label>
                            <input type="password" className='input' name='password' onChange={inputHandler}  required />
                        </div>
                        <div className="button-container">
                            <button className='login-btn' type='submit' >Login</button>
                            <button className='cancel-btn' type='button' >Cancel</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}
