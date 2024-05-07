'use client'
import TemporaryDrawer from '@/component/Drawer/Drawer'
import MenuAppBar from '@/component/Navbar/Navbar'
import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'

function Layout () {

    const [opencontrol , setOpenControl]=useState(false)
    console.log('opencontrol: ', opencontrol);
    const handleMenuClick=()=>{
        setOpenControl(!opencontrol);
    }
  return (
<Stack direction="column" sx={{height:'100%'}}>
    <MenuAppBar onMenuClick={handleMenuClick}/>
    <TemporaryDrawer open={opencontrol} onMenuClick={handleMenuClick} />
</Stack>
  )
}

export default Layout