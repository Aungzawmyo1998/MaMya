import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCheck, faXmark, faL } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

import "../../styles/user/register.css";

export default function Register() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: ""
    });
    const [errMsg, setErrMsg] = useState(null);
    const [message, setMessage] = useState('');

    const [conformPwd, setConformPwd] = useState("");

    const inputHandler = (e) => {
        const {name, value} = e.target;

        setUserData( prev => (
            {...prev, [name]: value}
        ))
    }

    const USER_REGEX = /^[A-Za-z '-]{3,50}$/;
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);
    const nameRef = useRef();
    
    useEffect(()=>{
        const result = USER_REGEX.test(userData.name);
        setValidName(result);
    },[userData.name]);

    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [validEmail, setValidEmail] = useState(false);
    useEffect(()=>{
        const result = EMAIL_REGEX.test(userData.email);
        setValidEmail(result);
    },[userData.email]);

    const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const [validPwd, setValidPwd] = useState(false);
    const [conformPwdValid, setConformPwdValid] = useState(false);
    useEffect(()=>{
        const result = PWD_REGEX.test(userData.password);
        setValidPwd(result);
        const matchPwd = userData.password === conformPwd;
        setConformPwdValid(matchPwd);
        
    },[userData.password, conformPwd])


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8383/user/register', { 
                name: userData.name,
                email: userData.email,
                password: userData.password,
                phone: userData.phone,
                address: userData.address
            });

            setErrMsg(null);
            setMessage("Registration Successful");
            console.log(res)
        } catch (error) {
            console.log(error.response.data.message);
        }
    }   
    console.log(userData)

    return (
        <div id='userRegister'>
            <div className="register-container">
                <div className="header">
                    <h1>Register</h1>
                    <div className="icon-cont">
                        <FontAwesomeIcon icon={faUser} className='icon' />
                    </div>
                </div>
                <form className='form-container' onSubmit={submitHandler}>
                    <div className="row">
                        <label htmlFor="name" className='field-name'> Name <span className={ validName ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} className='state true' /></span> <span className={ validName || !userData.name ? "hide" : "invalid"}><FontAwesomeIcon icon={faXmark} className='state false' /> </span> </label>
                        <input id='name' type="text" className='input' onChange={inputHandler} value={userData.name} name='name' required ref={nameRef} onFocus={ ()=> setNameFocus(true)} onBlur={()=> setNameFocus(false)} />
                    </div>
                    <div className="row">
                        <label htmlFor="email" className='field-name'> 
                            Email 
                            <span className={ validEmail ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} className='state true' /></span> <span className={ validEmail || !userData.email ? "hide" : "invalid"}><FontAwesomeIcon icon={faXmark} className='state false' /> </span>
                        </label>
                        <input id='email' type="text" className='input' onChange={inputHandler} value={userData.email} name='email' />
                    </div>
                    <div className="row">
                        <label htmlFor="password" className='field-name'> Password<span className={ validPwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} className='state true' /></span><span className={ validPwd || !userData.password ? "hide" : "invalid"}><FontAwesomeIcon icon={faXmark} className='state false' /> </span></label>
                        <input id='password' type="password" className='input' onChange={inputHandler} value={userData.password} name='password' />
                    </div>
                    <div className="row">
                        <label htmlFor="conformPwd" className='field-name'> Conform Password <span className={ conformPwdValid && validPwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} className='state true' /></span><span className={ conformPwdValid || !conformPwd ? "hide" : "invalid"}><FontAwesomeIcon icon={faXmark} className='state false' /> </span> </label>
                        <input id='conformPwd' type="password" className='input' onChange={(e)=>setConformPwd(e.target.value) }  />
                    </div>
                    <div className="row">
                        <label htmlFor="phone" className='field-name'> Phone </label>
                        <input id='address' type="text" className='input' onChange={inputHandler} value={userData.phone} name='phone' required />
                    </div>
                    <div className="row">
                        <label htmlFor="address" className='field-name'> Address </label>
                        <textarea id='address' type="text" className='input address' onChange={inputHandler} value={userData.address} name='address' required />
                    </div>
                    <div className="button-container">
                        <button 
                        className='register-btn'
                        disabled= { !validName || !validEmail|| !validPwd || !conformPwdValid} type='submit'
                        >Register</button>
                        <button className='cancel-btn' type='button'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
