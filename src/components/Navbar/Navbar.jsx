import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { NavItem } from "../NavItem/NavItem";
import PhonelinkRoundedIcon from '@mui/icons-material/PhonelinkRounded';
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>

          <PhonelinkRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", justifyContent: "center",alignItems: "center" }}>
            <NavItem title="Todos" href="#"/>
            <NavItem title="Auriculares" href="#"/>
            <NavItem title="Notebooks" href="#"/>
            <NavItem title="Procesadores" href="#"/>
          </Typography>

          <div style={{marginLeft:"3vw", marginRight: "1vw"}}>
            <CartWidget />
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}