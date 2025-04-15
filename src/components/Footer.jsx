import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Card, Container, Grid, Paper, Typography } from '@mui/material';
import { LinkedIn, PhoneAndroid } from '@mui/icons-material';

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box mt={5}>
			<Paper elevation={3}>
				<Container>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} md={4}>
							<Typography variant='h5'>
								Nathan
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} md={4} py={3}>
							<Grid container direction="row" sx={{ alignItems:'center' }}>
								<PhoneAndroid/> 
								<Typography fontSize={12} variant='span'>+639122161167</Typography>
							</Grid>
							<Grid container direction="row" sx={{ alignItems:'center' }}>
								<LinkedIn />
								<Typography fontSize={12} variant='span'>Nathanielle Romero</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Paper>
    </Box>
  );
}

export default Footer;
