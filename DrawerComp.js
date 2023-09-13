import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Pages = ['products','services','aboutus','services','Login','LogOut']
const DrawerComp = () => {
	const [openDrawer,setOpenDrawer]=useState(false)
  return (
	<>
	  <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
		<List>
			{Pages.map((page,index)=> (
							<ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
				<ListItemIcon>
					<ListItemText>{page}</ListItemText>
				</ListItemIcon>
			</ListItemButton>
			))}

		</List>
	  </Drawer>
	  <IconButton sx={{color:'white', marginLeft:'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
		<MenuIcon></MenuIcon>
	  </IconButton>
	</>
  )
}

export default DrawerComp
