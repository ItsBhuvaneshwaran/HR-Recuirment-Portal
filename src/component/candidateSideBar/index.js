import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css';
import CandidateView from "../candidateView";


const CandidateSidebar = () => {

  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClicktoLogout = () => {
    navigate("/auth/login")
  }

  return (
    <div 
    style={{
      margin: '0px 0px 0px -25.5rem'
    }}
    >
      {/* <div>
        <div className="sidebar">
          <div className="sidebar-header">
            <h2 className="side-submenu-header">Candidate Form</h2>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="submenu-text">
                <a className="submenu-text"> VIEWCANDIDATE </a>
              </li>
              <li className="submenu-text">
                <a className="submenu-text">INSERTCANDIATE</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <CandidateView />
    </div>
  );
}

export default CandidateSidebar;

