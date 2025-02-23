import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { Warehouse } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const drawerWidth = '220px';

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function DrowerNavMerchent({ open, handleDrawerOpen  }) {
  const { t } = useTranslation();
  const theme = useTheme();

  const handleDrawerClose = () => {
    handleDrawerOpen(false); 
  };

  return (<>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
     
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth,},
        }}
        variant="persistent"
        anchor="left"
        open={open} 
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Inbox', path: '/merchent/inbox', icon: <InboxIcon /> },
            { text: 'Starred', path: '/merchent/starred', icon: <MailIcon /> },
            { text: t('Warehouse'), path: '/merchent/warehouse', icon: <Warehouse /> },
          ].map(({ text, path, icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  </>
  );
}
