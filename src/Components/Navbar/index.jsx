import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Tooltip, Button, Link, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LogoMapit, IconLogin, ENImage, ARImage } from '../../assets';
import { useTranslation } from 'react-i18next';
import IconLung from './IconLung';
import Drawer from './Drawer';
import CompanyNav from '../CompanyNav';

function ResponsiveAppBar() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

  const pages = [
    { id: '1', label: t('Company') },
    { id: '2', label: t('Solutions') },
    { id: '3', label: t('Features') },
    { id: '4', label: t('Industries') },
    { id: '5', label: t('Pricing') },
    { id: '6', label: t('Resources') },
  ];
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [companyDrawer, setCompanyDrawer] = React.useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const openCompanyDrawer = (id) => {
    if (id === '1') {
      setCompanyDrawer(true); 
    }
  };

  return (
    <AppBar sx={{ px: { md: "6rem", position: "static" }, boxShadow: "none", overflowX: "hidden" }}>
      <Typography
        sx={{
          display: { xs: 'block', md: 'none' },
          color: 'white',
          width: '100%',
          textAlign: 'center',
          p: 1,
          fontWeight: 600,
          fontSize: '16px',
          background: "rgb(0, 58, 110)"
        }}
      >
        {t('Try for free today')}
      </Typography>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: {
                xs: 'flex', md: 'none',
                background: 'rgb(0, 58, 110)', width: '40px', height: "40px", borderRadius: '50%'
              },
              ml: 2,
              mr: '0.5rem',
            }}
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src={LogoMapit}
            sx={{
              width: { xs: '130px', md: '120px' },
              display: 'flex',
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page.id}
                onClick={() => openCompanyDrawer(page.id)} 
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "0.4rem",
                  cursor: "pointer",
                  '&:hover': {
                    color: '#FFBA21',
                  },
                }}
              >
                {t(page.label)}
              </Typography>
            ))}
          </Box>
          <IconLung ENImage={ENImage} ARImage={ARImage} />
          <Box
            sx={{
              display: { xs: 'flex', md: 'flex' },
              alignItems: 'center',
              gap: 1,
              ml: 'auto',
            }}
          >
            <Tooltip title={t('Log In')}>
              <Box
                component="img"
                src={IconLogin}
                width="40px"
                height="40px"
                sx={{
                  background: '#0B6296',
                  borderRadius: '50%',
                  padding: '10px',
                  fontSize: "30px",
                  mr: { xs: "1rem", md: "0" },
                  transform: isRtl ? 'scaleX(-1)' : "none",
                }}
              />
            </Tooltip>
            <Link href="https://www.mapit.sa/free-demo" underline="none">
              <Button
                sx={{
                  background: '#FFBA21',
                  textTransform: 'none',
                  color: 'black',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: 2,
                  py: "0.6rem",
                  px: "1rem",
                  ml: '1rem',
                  display: { sm: "flex", xs: "none" }
                }}
              >
                {t('Get a Dome')}
              </Button>
            </Link>
          </Box>
          <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} pages={pages} handelOpenCompany={openCompanyDrawer} />
        </Toolbar>
      </Container>
      <CompanyNav isOpen={companyDrawer} setCompanyDrower={setCompanyDrawer} /> 
    </AppBar>
  );
}

export default ResponsiveAppBar;
