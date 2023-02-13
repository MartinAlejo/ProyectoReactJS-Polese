import { AppBar, Toolbar, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  return (
    <AppBar position="relative" color="primary" sx={{ mt: 'auto' }} component="footer">
      <Toolbar sx={{display: "flex", alignItems: "center"}}>

        <Typography
          variant="body1"
          noWrap
          sx={{
            ml: 0,
            mr: 0,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'arial',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Copyright &copy; Martin Alejo Polese
        </Typography>

        <Typography variant="body1" component="div" sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "20px" }}>
          <WhatsAppIcon sx={{cursor: "pointer"}} />
          <InstagramIcon sx={{cursor: "pointer"}} />
          <FacebookIcon sx={{cursor: "pointer"}} />
        </Typography>
        
      </Toolbar>
    </AppBar>
  )
}
