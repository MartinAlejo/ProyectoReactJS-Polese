import { AppBar, Badge, Box, Toolbar, Typography } from "@mui/material"
import { NavItem } from "../NavItem/NavItem";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PhonelinkRoundedIcon from '@mui/icons-material/PhonelinkRounded';

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
            <NavItem title="Inicio" href="#"/>
            <NavItem title="Nosotros" href="#"/>
            <NavItem title="Productos" href="#"/>
            <NavItem title="Contacto" href="#"/>
          </Typography>

          <div style={{marginLeft:"2vw", marginRight: "1vw"}}>
            <Badge badgeContent={2} color="error">
              <ShoppingCartRoundedIcon />
            </Badge>
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}