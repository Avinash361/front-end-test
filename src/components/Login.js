import React, { useState } from 'react'
import '../Styles/login.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action/auth';
import { updateSpineer } from '../redux/action/Spineer';
import Spineer from './Spineer';
import Dialogs from './Dialogs';

function Login() {

    const state = useSelector((state) => state);
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        navigate('/');
    };

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };


    return (
        <>
            {state.spineer.value && <div className="login-spineer-box"><Spineer /> </div>}
            {state.error.flag && <div className="error-box"><Dialogs type={state.error.type} message={state.error.message} /></div>}

            <div style={{ backgroundColor: "#7982FE" }}>

                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="container vh-100 d-flex justify-content-center align-items-center" >
                            <div className="py-4">
                                <div className="mb-4" >
                                    <img src="/image/aatmnirbhar_logo.png" alt="logo" />
                                    <p className='text-center mt-2'>Login into your account</p>
                                </div>
                                <div className="position-relative mt-3 form-input">

                                    <form onSubmit={handleLogin} className='form'>
                                        <div className="example" style={{ margin: "auto", maxWidth: "300px" }}>
                                            <label htmlFor="user" className='mb-2'>Email address</label>
                                            <input type="text" placeholder="Enter your mail id" name="email" value={username} onChange={onChangeUsername} />
                                            <button><i className="fa fa-envelope"></i></button>
                                        </div>

                                        <div className="example" style={{ margin: "auto", maxWidth: "300px" }}>
                                            <label htmlFor="password" className='mt-3 mb-2'>Password</label>
                                            <input type="password" placeholder="Enter your password" name="password" value={password} onChange={onChangePassword} />
                                            <button><i className="fa fa-lock"></i></button>
                                        </div>
                                        <div className="mt-5 d-flex">
                                            <button type='submit' className="btn btn-md" style={{ width: "100%", background: "#7982FE", color: "white" }} >Login Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login100-more d-flex justify-content-center align-items-center" style={{ backgroundColor: "#7982FE" }}>
                        <img src="/image/Group 1.png" alt="group1" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login