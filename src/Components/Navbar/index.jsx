import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Tooltip, Menu, Button, Link } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { LogoMapit, IconLogin, ENImage, ARImage } from '../../assets';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/Slices/languageSlice';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
function ResponsiveAppBar() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const { language } = useSelector(state => state?.lang)
  const dispatch = useDispatch()

  const pages = [
    { id: '1', label: t('company') },
    { id: '2', label: t('Solutions') },
    { id: '3', label: t('Features') },
    { id: '4', label: t('Industries') },
    { id: '5', label: t('Pricing') },
    { id: '6', label: t('Resources') },
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorEl(null);
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
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "0.4rem",
                  '&:hover': {
                    color: '#FFBA21',
                  },
                }}
              >
                {t(page.label)}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'flex' },
              alignItems: 'center',
              gap: 1,
              m: 'auto',

            }}
          >
            <Box display="flex" alignItems="center" sx={{ display: { xs: "none", md: "flex" } }} gap={0}>
              <Box
                component="img"
                src={language === 'ar' ? ARImage : ENImage}
                width="17px"
                height="17px"
                sx={{
                  borderRadius: '50%',
                }}
              />
              <Button
                sx={{
                  fontSize: '12px',
                  color: 'white',
                  textTransform: 'none',
                  minWidth: 'auto'
                }}
                onClick={handleLanguageClick}
              >
                {language}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseLanguageMenu}
                sx={{
                  mt: '10px',
                  ml: "10px",
                }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Box display="flex" alignItems="center" sx={{ minWidth: '230px', height: "70px", background: "#f9fafb" }} gap={0}>
                    <Box sx={{
                      display: "flex", justifyContent: "space-between",
                      flexDirection: "row-reverse",
                      alignItems: "center", m: "auto",
                      background: 'rgb(249, 250, 251)'
                    }}>

                      {language === "en"
                      }

                      <Button
                        sx={{
                          fontSize: '12px',
                          color: language === 'en' ? 'black' : "rgb(102, 112, 133)",
                          textTransform: 'none',
                          background: language === 'en' ? '#ccc' : 'transparent',
                          // m:"1.5rem"

                        }}
                        onClick={() => dispatch(setLanguage(('en')))}
                      >
                        <Box
                          component="img"
                          src={ENImage}
                          width="17px"
                          height="17px"
                          sx={{
                            borderRadius: '50%',
                            mr: "0.5rem",
                          }}
                        />
                        {t('English')}
                      </Button>
                      <Box display="flex" alignItems="center" gap={1}>

                        <Button
                          sx={{
                            fontSize: '12px',
                            color: language === 'ar' ? 'black' : "rgb(102, 112, 133)",
                            textTransform: 'none',
                            minWidth: 'auto',
                            background: language === 'ar' ? '#ccc' : 'transparent',

                          }}
                          onClick={() => dispatch(setLanguage(('ar')))}
                        >
                          <Box
                            component="img"
                            src={ARImage}
                            width="17px"
                            height="17px"
                            borderRadius={'50%'}
                            sx={{
                              mr: "0.5rem",
                            }}
                          />
                          {t('العربية')}
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Menu>
            </Box>
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

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleCloseDrawer}
            sx={{
              '& .MuiDrawer-paper': {
                width: '100%',
                height: 'auto',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'absolute',
                top: '20%',
                padding: 2,
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{
                  fontSize: '17px',
                  color: "black",
                  textTransform: "none",
                  padding: '1.5rem',
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start"

                }}
              >
                {page.label}
              </Button>
            ))}
            <Box display="flex" alignItems="center" gap={1}>
              <Box display="flex" alignItems="center" gap={1} sx={{ background: '#F9FAFB', m: '1rem' }}>
                <Box
                  component="img"
                  src={ENImage}
                  width="17px"
                  height="17px"
                  sx={{
                    borderRadius: '50%',
                  }}
                />
                <Button
                  sx={{
                    fontSize: '17px',
                    color: 'black',
                    textTransform: 'none',
                    minWidth: 'auto'
                  }}
                  onClick={() => dispatch(setLanguage(('en')))}
                >
                  {t('English')}
                </Button>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Box
                  component="img"
                  src={ARImage}
                  width="17px"
                  height="17px"
                  sx={{
                    borderRadius: '50%',
                  }}
                />
                <Button
                  sx={{
                    fontSize: '17px',
                    color: 'black',
                    textTransform: 'none',
                    minWidth: 'auto'
                  }}
                  onClick={() => dispatch(setLanguage(('ar')))}
                >
                  {t('Arabic')}
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
