'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
interface MenuAppBarProps {
   
    onMenuClick: ()=>void;
   
  }
export default function MenuAppBar({onMenuClick}:MenuAppBarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleLogout = () => {
   alert('logout')
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      console.log('event.currentTarget: ', event.currentTarget);
    setAnchorEl(event.currentTarget);
    console.log('anchorEl: ', anchorEl);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    
      <AppBar position="static" sx={{zIndex:1}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        User Name
          </Typography>
       
            <div>
              <Box
               
                sx={{display:'flex', flexDirection:'row' , gap:'10px', alignItems:'center'}}
              >
                <AccountCircle />
                <Typography>Organisation test</Typography>
                <IconButton   onClick={handleMenu}>  {anchorEl ? <KeyboardArrowUpIcon sx={{color:'white'}}/> : <KeyboardArrowDownIcon sx={{color:'white'}}/>} </IconButton>
               
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Organisation test</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </>
  );
}





