import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Drawer.styles.css'
interface TemporaryDrawerProps {
   open:boolean;
    onMenuClick: ()=>void;
   
  }
export default function TemporaryDrawer( {open, onMenuClick}:TemporaryDrawerProps) {
 
  const toggleDrawer =  () => {
  onMenuClick();
  };

  const DrawerList = (
    <Box  role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}  className='drawer-item'>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ display:'flex',flexDirection:'row',justifyContent:'center', gap:'18px' , height: open ? '48px' : '72px'}}>
              <ListItemIcon className='icons'>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
             {open &&  <ListItemText primary={text} className='transithh'   primaryTypographyProps={{
              noWrap: true
             }}/>}
            </ListItemButton>
          </ListItem>
        ))}
      </List>  
    </Box>
  );

  return (
      <Drawer anchor='left' open={open} onClose={toggleDrawer}  variant='permanent' className="drawer-container " PaperProps={{className:'drawerss'}}
       sx={{width: open ? '250px' : '72px' , zIndex:'0'} } >
        {DrawerList}
      </Drawer>
  );
}


