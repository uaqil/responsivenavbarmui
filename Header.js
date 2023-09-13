import { AppBar, Button,  Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'


import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DrawerComp from './DrawerComp';
const Pages = ['products','services','aboutus','services']

const Header = () => {
	const [value, setValue] = useState();
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
	<>
	  <AppBar>
		<Toolbar sx={{background : '#063970'}} >
			<LocalGroceryStoreIcon />
			{ isMatch ? (
		       <>
			   <Typography>
				Shoppe
			   </Typography>
			   <DrawerComp/>
			   
			   </> 	):
			   <>
			   <Tabs textColor='inherit' value={value} onChange={(e,value) => setValue(value)} indicatorColor='secondary'>
				{Pages.map((page,index) => (
					<Tab key={index} label={page}></Tab>
				))}
				<Tab label='products'>
				</Tab>
				<Tab label='Services'>
				</Tab><Tab label='Contact Us'>
				</Tab><Tab label='About us'>
				</Tab>
			</Tabs>
			  
			   
			<Button sx={{marginLeft:'auto'}} variant='contained'>Login</Button>
			<Button sx={{marginLeft:'10px'}} variant='contained'>Signup</Button>
			</>
		}
			
		</Toolbar>
	
		
	  </AppBar>
	</>
  )
}

export default Header
