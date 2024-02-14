import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css'; // Import the CSS file for styling
import SideBoard from "../sideSlide";


// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// });

// const SearchBox = styled("div")(({ theme }) => ({
//   backgroundColor: "white",
//   padding: "5px 10px",
//   width: "50%",
//   borderRadius: theme.shape.borderRadius,
// }));

// const IconsBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "20px",
//   [theme.breakpoints.down("sm")]: {
//     display: "none",
//   },
// }));

// const UserBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
//   [theme.breakpoints.up("sm")]: {
//     display: "none",
//   },
// }));

const Sidebar = () => {

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
    <div>
      <div>
        <div className="sidebar">
          <div className="sidebar-header">
            <h2 className="side-submenu-header">Admin Login</h2>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="submenu-text">
                <a> <NavLink to="/main/industry">INDUSTRY</NavLink>
                </a>
              </li>
              <li className="submenu-text">
                <a className="submenu-text"> <NavLink to="/main/department">DEPARTMENT</NavLink></a>
              </li>
              <li className="submenu-text">
                <a className="submenu-text"> <NavLink to="/main/designation">DESIGNATION</NavLink></a>
              </li>
              <li className="submenu-text">
                <a className="submenu-text"> <NavLink to="/main/Keyskills">KEYSKILLS</NavLink></a>
              </li>
              <li className="submenu-text">
                <a className="submenu-text"> <NavLink to="/main/role">ROLE</NavLink></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;



{/* <---------------------------Topnav--------------------------------> */ }
{/* <div>
          <AppBar>
            <StyledToolbar>
  
              <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}> */}
{/* {props.headerTitle || "ProTeam"} */ }
{/* <SideBoard />
                <h1 className="nav-title">ProTeam</h1>
              </Typography> */}
{/* <LocalLibrary sx={{ display: { xs: "block", sm: "none" } }} />
              
              <SearchBox className="base-search-box">
                <InputBase  placeholder="search..." />
              </SearchBox> */}
{/* <form>
                <input className="base-search-box" type="search" id="search" name="search" placeholder=" Search..." />
              </form>
  
              <IconsBox>
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
                <Typography variant="p">Sang</Typography>
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
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={() => handleClicktoLogout()}>Logout</MenuItem>
            </Menu>
          </AppBar>
        </div> */}
{/* <---------------------------Topnav--------------------------------> */ }


// DOODLE Example
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