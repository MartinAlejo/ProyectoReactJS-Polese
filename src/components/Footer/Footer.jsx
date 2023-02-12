import { AppBar, Toolbar, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, mt: 5 }}>
      <Toolbar sx={{display: "flex", alignItems: "center"}}>

        <Typography
          variant="body1"
          noWrap
          sx={{
            ml: 1,
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
          <WhatsAppIcon />
          <InstagramIcon />
          <FacebookIcon />
        </Typography>
        
      </Toolbar>
    </AppBar>
  )
}
