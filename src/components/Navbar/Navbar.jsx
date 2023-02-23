import { AppBar, Toolbar, Typography } from "@mui/material"
import PhonelinkRoundedIcon from '@mui/icons-material/PhonelinkRounded';
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

import "./Navbar.css"

export const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{mb: 5}} >
      <Toolbar>

        <PhonelinkRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <NavLink to="/" style={{textDecoration: "none",  color: "white"}}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              ml: 1,
              mr: 0,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BIT BY BIT
          </Typography>
        </NavLink>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", justifyContent: "center",alignItems: "center" }}>
          <NavLink to="/" className={({ isActive }) => isActive ? "navbar-item active-navbar-item" : "navbar-item unactive-navbar-item"} > Todos </NavLink>
          <NavLink to="/category/auriculares" className={({ isActive }) => isActive ? "navbar-item active-navbar-item" : "navbar-item unactive-navbar-item"} >  Auriculares  </NavLink>
          <NavLink to="/category/notebooks" className={({ isActive }) => isActive ? "navbar-item active-navbar-item" : "navbar-item unactive-navbar-item"} >  Notebooks  </NavLink>
          <NavLink to="/category/procesadores" className={({ isActive }) => isActive ? "navbar-item active-navbar-item" : "navbar-item unactive-navbar-item"} >  Procesadores  </NavLink>
        </Typography>

        <div style={{marginLeft:"3vw", marginRight: "1vw"}}>
          <NavLink to="/cart" style={{textDecoration: "none", color: "white"}}> <CartWidget /> </NavLink>
        </div>
        
      </Toolbar>
    </AppBar>
  )
}