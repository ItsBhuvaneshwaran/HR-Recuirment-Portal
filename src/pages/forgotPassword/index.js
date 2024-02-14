import React, { useEffect } from 'react';
import './fogotPass.css';
import FormPage from '../../component/Form';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    let navigate=useNavigate();
    const  OnclickfromForgot = () => {
        navigate("/auth/login")
    }

    return (
        <div>
            <FormPage
                head="Forgot Password?"
                subHead1="ENTER YOUR EMAIL"
                subHead2="ENTER YOUR NAME"
                subHead3="ENTER YOUR MOBILE NO:"
                subHead4="ENTER YOUR PASSWORD"
                buttonName="Submit" 
                onClicktoLogin={() => OnclickfromForgot()}/>
        </div>
    );
}

export default ForgotPassword;