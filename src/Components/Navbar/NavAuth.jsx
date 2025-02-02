import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, useTheme } from '@mui/material';
import { LogoMapit, ENImage, ARImage } from '../../assets';
import { useTranslation } from 'react-i18next';
import IconLung from './IconLung';
import { Link } from 'react-router-dom';

function NavAuth() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

 
  return (
    <AppBar sx={{ px: { md: "6rem", position: "static" }, overflowX: "hidden" , pt:15 }}>

      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link to='/' color='white'>
          <Button color='white' sx={{ textTransform: "none" , fontSize:"15px" , fontWeight:400 , textDecoration:"none" }}>
          {t("Back to Home")} 
          </Button>
            
            </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex' ,
              justifyContent: 'center',
              
            }}
          >
            <Link to='/'>
            <Box
              component="img"
              src={LogoMapit}
              sx={{
                width: { xs: '130px', md: '130px' },

              }}
            />
            </Link>
          </Box>
          <IconLung ENImage={ENImage} ARImage={ARImage} />

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavAuth;
