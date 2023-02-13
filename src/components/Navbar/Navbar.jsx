import { AppBar, Toolbar, Typography } from "@mui/material"
import PhonelinkRoundedIcon from '@mui/icons-material/PhonelinkRounded';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{mb: 5}} >
      <Toolbar>

        <PhonelinkRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Link to="/" style={{textDecoration: "none",  color: "white"}}>
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
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", justifyContent: "center",alignItems: "center" }}>
          <Link to="/" style={{textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw"}}> Todos </Link>
          <Link to="/category/auriculares" style={{textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw"}}>  Auriculares  </Link>
          <Link to="/category/notebooks" style={{textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw"}}>  Notebooks  </Link>
          <Link to="/category/procesadores" style={{textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw"}}>  Procesadores  </Link>
        </Typography>

        <div style={{marginLeft:"3vw", marginRight: "1vw"}}>
          <CartWidget />
        </div>
        
      </Toolbar>
    </AppBar>
  )
}