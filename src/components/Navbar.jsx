import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <div>
     <AppBar component="nav">
      <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            BookStay
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
           
              <Button  sx={{ color: '#fff' }}>
                Home
              </Button>
         
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;
