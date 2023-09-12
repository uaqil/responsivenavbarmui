import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Shop2Icon from '@mui/icons-material/Shop2';
import DrawerComp from './DrawerComp';


const Navbar = ({links}) => {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
	const [value, SetValue] =useState()
  return (
	<>
	  <AppBar sx={{backgroundImage:'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(113,113,131,1) 35%, rgba(11,30,34,1) 100%);'}}>
		<Toolbar>
		{isMatch ? <> <Typography>
                     <Shop2Icon />
					</Typography> <DrawerComp links={ links }></DrawerComp> </> :	<Grid container sx={{placeItems:'center'}}>
				<Grid xs={2}>
					
					<Typography>
                     <Shop2Icon />
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e,val) => SetValue(val) } >
						{links.map((link,index)=> (
							<Tab key={index} label={link}/>
						))}
					</Tabs>
				</Grid>
				<Grid item xs={1}/>
				<Grid item xs={3}>
					<Box display={'flex'}>
						<Button sx={{marginLeft: 'auto', background:'rgba(0,0,0,1)'}} variant='contained'>Login</Button>
						<Button sx={{marginLeft: 1, background:'rgba(0,0,0,1)'}} variant='contained'>Signup</Button>
					</Box>
				</Grid>
			</Grid>
        }	
		</Toolbar>
	  </AppBar>
	</>
  )
}

export default Navbar
