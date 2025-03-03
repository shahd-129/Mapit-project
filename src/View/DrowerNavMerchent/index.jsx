import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet, useNavigate } from 'react-router-dom';
import { Warehouse } from '@mui/icons-material';
import { Button, Link, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import IconLung from '../../component/navbar/iconLung';
import { LogoMapit, ENImage, ARImage } from '../../assets';
import { useDispatch } from 'react-redux';
import { clearToken } from '../../redux/slice/tokenSlice';
import GroupIcon from '@mui/icons-material/Group';
const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  // transition: theme.transitions.create(['margin', 'width'], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  //   marginTop: 64, 
  // }),
  // variants: [
  //   {
  //     props: ({ open }) => open,
  //     style: {
  //       width: `calc(100% - ${drawerWidth}px)`,
  //       marginLeft: `${drawerWidth}px`,
  //       transition: theme.transitions.create(['margin', 'width'], {
  //         easing: theme.transitions.easing.easeOut,
  //         duration: theme.transitions.duration.enteringScreen,
  //       }),
  //     },
  //   },
  // ],
}));



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  zIndex: theme.zIndex.appBar - 1,
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { t } = useTranslation()
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const isLargeScreen = useMediaQuery('(min-width: 1110px)');
  React.useEffect(() => {
    setOpen(isLargeScreen);
  }, [isLargeScreen]);


  const dispatch = useDispatch()
  const navigate = useNavigate()
  function Logout() {
    dispatch(clearToken());
    navigate('/auth/login');
  }
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ px: { md: "3rem"}}} >
      
        <Toolbar  sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {mr: 2,},
               { display:  { md: 'none', xs: "block" }  },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Box component="img" src={LogoMapit} sx={{ width: { xs: '130px', md: '120px' }, display: 'flex' }} />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button sx={{ m: 10 }} onClick={Logout} color='white'>
              {t("Log out")}
            </Button>
            <IconLung ENImage={ENImage} ARImage={ARImage} />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
         <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> 
        <Divider />
        <Divider />
        <List>
          {[
            { text: 'Inbox', path: '/merchent/inbox', icon: <InboxIcon /> },
            { text: 'Starred', path: '/merchent/starred', icon: <MailIcon /> },
            { text: t('Warehouse'), path: '/merchent/warehouse', icon: <Warehouse /> },
            { text: t('Users'), path: '/merchent/users', icon: <GroupIcon /> },
          ].map(({ text, path, icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}

