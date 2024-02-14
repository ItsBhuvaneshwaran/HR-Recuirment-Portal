import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import './optionStyle.css'


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function CustomizedMenus(props) {
    let {
        btnValue,
        handlClicktoMenu
    } = props

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };


   // let navigate = useNavigate();
    // const handleClicktoIndustry = () => {
        // navigate("/main/industry")
    // }
    // const handleClicktoDepartment = () => {
        // navigate("/main/department")
    // }

    // const handleClicktoDesignation = () => {
    //     navigate("/main/designation")
    // }

    // const handleClicktoKeySkills = () => {
    //     navigate("/main/Keyskills")
    // }
    // const handleClicktoRole = () => {
    //     navigate("/main/role")
    // }

    return (
        <div>
            <li className='option-submit-btn'
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                // onClick={handleClick}
                onClick={() => handlClicktoMenu()}> {btnValue}
            </li>



            {/* <Button className='option-submit-btn'
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
            >
                Options
            </Button> */}
            {/* <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleClicktoIndustry()} disableRipple>
                    Industry
                </MenuItem>
                <MenuItem onClick={() => handleClicktoDepartment()} disableRipple>
                    Department
                </MenuItem>

                <MenuItem onClick={() => handleClicktoDesignation()} disableRipple>
                    Designatin
                </MenuItem>
                <MenuItem onClick={() => handleClicktoKeySkills()} disableRipple>
                    KeySkills
                </MenuItem>
                <MenuItem onClick={() => handleClicktoRole()} disableRipple>
                    Role
                </MenuItem>
            </StyledMenu> */}
        </div>
    );
}