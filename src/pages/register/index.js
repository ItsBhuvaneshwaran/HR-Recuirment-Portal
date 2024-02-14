// import React, { useEffect } from 'react';
// import './register.css';
// import { Form } from 'react-router-dom';
// import FormPage from '../../component/Form';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     let navigate=useNavigate();
//     const  OnclickfromRegister = () => {
//         navigate("/auth/login")
//     }

//     return (
//         <div>
//             <FormPage
//                 head="Create Account"
//                 subHead1="UserName"
//                 subHead2="Email Address"
//                 subHead3="Password"
//                 subHead4="Choose an Option"
//                 buttonName="Register" 
//                 onClicktoLogin={() => OnclickfromRegister()}/>
//         </div>
//     );
// }

// export default Register;

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './register.css';
import { Box, Button, Link, Stack, Typography, TextField, Unstable_Grid2 as Grid } from '@mui/material';
import { Autocomplete } from '@mui/material';

const Register = (props) => {

    const [dataobj, setData] = useState([]);
    const [labeloption, setLabeloption] = React.useState('');
    const [Id, setrole] = React.useState('');
    const [UserName, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Pass, setPass] = React.useState('');

    const initialValue = {
        userName: UserName,
        email: Email,
        password: Pass,
        roleid: Id,
    }
    const [formData, setFormData] = useState(initialValue);

    let navigate = useNavigate();


    useEffect(() => {

        fetch('http://localhost:7036/Role/api/GetRole/')
            .then(response => response.json())
            .then(json => setData(json.Models))
            .catch(error => console.error(error));
        const inputs = document.querySelectorAll(".input");

        function focusHandler() {
            this.parentElement.querySelector(".label-txt").classList.add("label-active");
        }

        function focusoutHandler() {
            if (this.value === "") {
                this.parentElement.querySelector(".label-txt").classList.remove("label-active");
            }
        }
        inputs.forEach(function (input) {
            input.addEventListener("focus", focusHandler);
            input.addEventListener("focusout", focusoutHandler);
        });
    }, []);

    function handleSubmit(value) {
        const requestOptions = {
            method: 'post',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(value)
        };
        fetch('http://localhost:7036/Register/api/insertregister', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .then(data => console.log(data))
            .catch(error => console.log(error));

    }
    const [emailError, setEmailError] = React.useState("");

    function onRoleChange(e, role) {
        e.preventDefault();
        setLabeloption(role.Id);
        setrole(role.Id);
        // setFormData({ ...formData, [role]: roleId })
    }
    function onchangename(event) {
        const x = event.target.value;
        setName(x);
    }
    function onchangeEmail(event) {
        const x = event.target.value;
        setEmail(x);
    }
    function onchangepass(event) {
        const x = event.target.value;
        setPass(x);
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validateEmail = emailValue => {
        if (!emailRegex.test(emailValue)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    const [passError, setPassError] = React.useState("");

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    const validatePass = passValue => {
        if (!passRegex.test(passValue)) {
            setPassError("Must be one Caps, small & number");
        } else {
            setPassError("");
        }
    };

    return (
        <div className='body-container'>
            <div>
                <form className="form-container">
                    <h3 className='header'>Create Account</h3>
                    <label className="lable-format">
                        <p className="label-txt">USERNAME</p>
                        <input type="text" className="input" value={UserName} onChange={e => onchangename(e)} />
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                    </label>
                    <label className="lable-format">
                        <p className="label-txt">EMAIL ADDRESS</p>
                        <input
                            type="email"
                            className={`input ${emailError ? "error" : ""}`}
                            value={Email}
                            onChange={e => {
                                onchangeEmail(e)
                                const emailValue = e.target.value;
                                setEmail(emailValue);
                                validateEmail(emailValue);
                            }}
                        />

                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                        {emailError && <p className="error-message" >{emailError}</p>}
                    </label>
                    {/* <label className="lable-format">
                        <p className="label-txt">Choose an Option</p>
                        <input type="tel" className="input" />
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                    </label> */}
                    <label className="lable-format">
                        <p className="label-txt">PASSWORD</p>
                        <input
                            type="password"
                            className={`input ${passError ? "error" : ""}`}
                            value={Pass}
                            onChange={e => {
                                onchangepass(e)
                                const passValue = e.target.value;
                                setPass(passValue);
                                validatePass(passValue);
                            }}
                        />
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                        {passError && <p className="error-message" >{passError}</p>}
                    </label>
                    <Grid className="autocomplete-box" xs={6} md={6}>
                        <div>
                            <Autocomplete
                                options={dataobj}
                                getOptionLabel={(option) => option.Name}
                                onChange={(event, Id) => onRoleChange(event, Id)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="CHOOSE AN OPTION"
                                        // color="red"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiInputLabel-root': {
                                                color: 'black',
                                                fontSize: 11, // Adjust the label font size as needed
                                                // fontWeight: 600, // You can also adjust font weight
                                            },
                                            '& .MuiInputBase-input': {
                                                fontSize: 12, // Adjust the input font size as needed
                                            },
                                        }} I
                                    />
                                )}
                            />
                        </div>
                    </Grid>
                    <button className='submit-btn' type="submit" onClick={e => handleSubmit(initialValue)}>Register</button>
                    <div>
                        <Typography
                            color="text.secondary"
                            variant="body2"
                            fontSize="12px"
                            marginTop="20px"
                            marginLeft="-50px"
                            textAlign="left"
                        >
                            Regisetered / Already have an account?
                            &nbsp;
                            <Link
                                href="/"
                                underline="hover"
                                variant="subtitle2"
                                fontSize="12px"
                            >
                                LOG IN
                            </Link>
                        </Typography>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;