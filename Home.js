import React,{useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
// import TemporaryDrawer from "./Drawer.js";

export default function MenuAppBar(props) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser]=useState({})

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userToken = localStorage.getItem("userToken");
  console.log(userToken);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            // onClick={toggleDrawer}
          >
            <MenuIcon />
            <TemporaryDrawer  />
          </IconButton> */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {userToken ? (
            <div>
              <Link to='/' style={{textDecoration:"none",color:"white"}}>
                <h1>Fast Loan</h1>
              </Link>
            </div>
          ):(
            
                      <div className="aaru">
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
             </div>
            )}

          </Typography>
{userToken && (
  <div>
    <div className="temp">
      <Link to='/about'><p>About Us</p></Link>
      <Link to='/about'><p>Contact Us</p></Link>
      <Link to='/about'><p>Emi Calculator</p></Link>
    
  <div class="dropdown">
  <button class="dropbtn">Our Products</button>
  <div class="dropdown-content">
    <a href="#">Home Loan</a>
    <a href="#">Business Loan</a>
    <a href="#">Education Loan</a>
    <a href="#">Personal Loan</a>
  </div>
</div>
</div>
</div>
)}



          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
