import React, { useState } from 'react'
import  { IconButton, List, ListItemButton, ListItemIcon,Drawer, ListItemText } from '@mui/material'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const DrawerComp = ({links}) => {
	const [open, setOpen]=useState(false)
  return (
	<>
	  <Drawer PaperProps={{
		sx: { backgroundColor: 'rgba(0,0,0,1)' }
	  }} open={open} onClose={()=> setOpen(false) }>
	  <List>
		{links.map((link, index) => (
			<ListItemButton onClick={() => setOpen(false) } key={'index'} divider>
				<ListItemIcon>
					<ListItemText sx={{color:'white'}}>
						{link}
					</ListItemText>
				</ListItemIcon>
			</ListItemButton>
		))}
	  </List>
	  </Drawer>
	  <IconButton sx={{marginLeft:'auto', color:'white'}} onClick={() => setOpen(!open) }>
		<MenuTwoToneIcon />
	  </IconButton>
	</>
  )
}

export default DrawerComp
