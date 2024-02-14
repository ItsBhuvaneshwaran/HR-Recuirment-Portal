// import { NavLink } from 'react-router-dom';
// import './style.css';

// const SideBar = (props) => {
//     return (
//         <div className='sidebar'>
//             <NavLink to="/main/home" className="sidebar-link">
//                 <p>Home</p>
//             </NavLink>

//             <NavLink to="/main/about" className="sidebar-link">
//                 <p>About</p>
//             </NavLink>
//         </div>
//     );
// }

// export default SideBar;

import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpeg"
import { Home, LocalLibrary, ContactEmergency, Mail, Notifications } from "@mui/icons-material";
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css'; // Import the CSS file for styling
import SideBoard from "../sideSlide";
import homeIcon from '../../assets/icons/homeIcon.png'
import CustomizedMenus from "../options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "5px 10px",
  width: "50%",
  borderRadius: theme.shape.borderRadius,
}));

const IconsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


// function HomeIconFunc() {
//   return (
//     <div>
{/* <FontAwesomeIcon className="home-icon" icon={faHome} size="2x" color="aquamarine" /> */ }
//     </div>
//   );
// }

const Navbar = () => {

  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClicktoHome = () => {
    navigate("/main/home")
  }

  const handleClicktoLogout = () => {
    navigate("/auth/login")
  }
  const handleClicktoProfile = () => {
    navigate("/main/profile")
  }

  const handlClicktoOptionMenuByNavbar = () => {
    navigate("/main/optionmenubar")
  }

  const handlClicktoCandidateMenuByNavbar = () => {
    navigate("/main/candidatemenuBar")
  }

  return (
    <div className="home-body-container">
    
      <div>
        <AppBar>
          {/* <img src={homeIcon} alt="homeIcone" /> */}
          <StyledToolbar>

            <Badge
              // badgeContent={4}
              color="error"
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <FontAwesomeIcon className="home-icon" icon={faHome} size="2x" color="aquamarine" onClick={() => handleClicktoHome()}
              />
              {/* <HomeIconFunc  /> */}
            </Badge>
            {/* <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}> */}
            {/* {props.headerTitle || "ProTeam"} */}
            {/* <SideBoard /> */}
            {/* <HomeIconFunc/> */}
            <h1 className="nav-title">ProTeam</h1>
            {/* </Typography> */}
            {/* <LocalLibrary sx={{ display: { xs: "block", sm: "none" } }} />
            
            <SearchBox className="base-search-box">
              <InputBase  placeholder="search..." />
            </SearchBox> */}
            <form>
              <input className="base-search-box" type="search" id="search" name="search" placeholder="Search..." />
            </form>

            <IconsBox>
              <div> <CustomizedMenus btnValue="Candidate" handlClicktoMenu={() => handlClicktoCandidateMenuByNavbar()} /></div>
              <div> <CustomizedMenus btnValue="Option" handlClicktoMenu={() => handlClicktoOptionMenuByNavbar()} /></div>
              <Badge
                badgeContent={0}
                color="error"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <ContactEmergency />
              </Badge>
              <Badge
                badgeContent={4}
                color="error"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <Mail />
              </Badge>
              <Badge
                badgeContent={6}
                color="error"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <Notifications />
              </Badge>
              <Avatar
                src={ProfilePhoto}
                sx={{ width: 30, height: 30, "&:hover": { cursor: "pointer" } }}
                onClick={handleClick}
              />
            </IconsBox>

            <UserBox>
              <Typography variant="p">Bhuvan</Typography>
              <Avatar
                src={ProfilePhoto}
                sx={{ width: 30, height: 30, "&:hover": { cursor: "pointer" } }}
                onClick={handleClick}
              />
            </UserBox>
          </StyledToolbar>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleClicktoProfile()}>Profile</MenuItem>
            <MenuItem onClick={() => handleClicktoLogout()}>Logout</MenuItem>
          </Menu>
        </AppBar>
      </div>
    </div>
  );
}

export default Navbar;