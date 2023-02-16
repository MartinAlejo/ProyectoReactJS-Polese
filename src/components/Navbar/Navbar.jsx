import { AppBar, Toolbar, Typography } from "@mui/material"
import PhonelinkRoundedIcon from '@mui/icons-material/PhonelinkRounded';
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/" style={{textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw"}}> Todos </NavLink>
          <NavLink to="/category/auriculares" style={{textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw"}}>  Auriculares  </NavLink>
          <NavLink to="/category/notebooks" style={{textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw"}}>  Notebooks  </NavLink>
          <NavLink to="/category/procesadores" style={{textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw"}}>  Procesadores  </NavLink>
        </Typography>

        <div style={{marginLeft:"3vw", marginRight: "1vw"}}>
          <NavLink to="/cart" style={{textDecoration: "none", color: "white"}}> <CartWidget /> </NavLink>
        </div>
        
      </Toolbar>
    </AppBar>
  )
}