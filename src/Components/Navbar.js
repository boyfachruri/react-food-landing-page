import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import asyrafBakery from "../Assets/asyraf-logo/asyrafBakery.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import { Link } from "react-router-dom";



const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
            path: "/"
        },
        {
            text: "About",
            icon: <InfoIcon/>,
            path: "/about"
        },
        {
            text: "Products",
            icon: <CommentRoundedIcon />,
            path: "/product"
        },
        // {
        //     text: "Contact",
        //     icon: <PhoneRoundedIcon />,
        //     path: "/contact"
        // },
        {
            text: "Pesan Sekarang",
            icon: <ShoppingCartRoundedIcon />,
            path: "https://wa.wizard.id/91719c",
            target: "_blank"
        },
    ]

  return (
  <nav className="navbar-position">
    <div className="nav-logo-container"><img src={asyrafBakery} alt=""/></div>
    <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">products</Link>
        {/* <Link to="/contact">Contact</Link> */}
        {/* <Link to=""><BsCart2 className="navbar-cart-icons"/></Link> */}
        <Link to="https://wa.wizard.id/91719c" target="_blank"><button className="primary-button">
            Pesan Sekarang
        </button> </Link>
        
    </div>
    <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{width: 250}}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            oneKeyDown={() => setOpenMenu(false)}
        >
            <List>
                {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <Link className="link" to={item.path} target={item.target}><ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>  
                            <ListItemText>{item.text}</ListItemText>                          
                        </ListItemButton></Link>
                        
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
  </nav>
  )
};

export default Navbar;
