import React from "react";
import Sidebar from "../../component/sidebar";
import Lottie from "lottie-react";
import assets from "../../assets";
import './menuBar.css'
import { NavLink, useNavigate } from 'react-router-dom';

const OptionMenuBar = () => {

    const animationOptionIndustry = {
        loop: true,
        animationData: assets.Lottie.industry,
    };
    const animationOptionDepartment = {
        loop: true,
        animationData: assets.Lottie.department,
    };
    const animationOptionDesignation = {
        loop: true,
        animationData: assets.Lottie.designation,
    };
    const animationOptionKeySkills = {
        loop: true,
        animationData: assets.Lottie.keySkills,
    };
    const animationOptionRole = {
        loop: true,
        animationData: assets.Lottie.role,
    };

    return (
        <div>
            <Sidebar />
            <div className="lottie-rows">
                <div className="lottie-row">
                    <div className="lottie-container-one">
                        <NavLink to="/main/industry">
                            <p>Industry</p>
                            <Lottie
                                {...animationOptionIndustry}
                                className="lottie-animation-one"
                            />
                        </NavLink>
                    </div>
                    <div className="lottie-container-two">
                        <NavLink to="/main/department">
                            <p>Department</p>
                            <Lottie
                                {...animationOptionDepartment}
                                className="lottie-animation-two"
                            />
                        </NavLink>
                    </div>
                </div>
                <div className="lottie-row">
                    <div className="lottie-container-three">
                        <NavLink to="/main/designation">
                            <p>Designation</p>
                            <Lottie
                                {...animationOptionDesignation}
                                className="lottie-animation-three"
                            />
                        </NavLink>
                    </div>
                    <div className="lottie-container-four">
                        <NavLink to="/main/Keyskills">
                            <p>Skills</p>
                            <Lottie
                                {...animationOptionKeySkills}
                                className="lottie-animation-four"
                            />
                        </NavLink>
                    </div>
                </div>
                <div className="lottie-row">
                    <div className="lottie-container-five">
                        <NavLink to="/main/role">
                            <p>Role</p>
                            <Lottie
                                {...animationOptionRole}
                                className="lottie-animation-five"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OptionMenuBar;