import React, { useEffect } from 'react';
import './style.css';

const FormPage = (props) => {

    let {
        head,
        subHead1,
        subHead2,
        subHead3,
        subHead4,
        buttonName,
        onClicktoLogin

    } = props

    useEffect(() => {
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

    return (
        <div className='body-container'>
            <div>
                <form className="form-container">
                    <h3 className='header'>{head}</h3>
                    <label className="lable-format">
                        <p className="label-txt">{subHead1}</p>
                        <input type="email" className="input" />
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                    </label>
                    <label className="lable-format">
                        <p className="label-txt">{subHead2}</p>
                        <input type="text" className="input" />
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                    </label>
                    <label className="lable-format">
                        <p className="label-txt">{subHead3}</p>
                        <input type="tel" className="input" />
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                    </label>
                    <label className="lable-format">
                        <p className="label-txt">{subHead4}</p>
                        <input type="password" className="input" />
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                    </label>
                    <button className='submit-btn' type="submit" onClick={() => onClicktoLogin()}>{buttonName}</button>
                </form>
            </div>
        </div>
    );
}

export default FormPage;