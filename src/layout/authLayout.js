import React from "react";
import './layout.css'
import brandLogo from '../assets/images/brandLogo.jpeg'

export const AuthLayout = (props) => {
    return (
        <div className="body">
            {/* <img className="brand-logo" src={brandLogo} alt="Brand Logo" /> */}
            <div>{props?.children}</div> 
            {/* {children} -->passing children throuth this  */}
        </div>
        
    );
}

export default AuthLayout;