import { Box, Button, IconButton, styled, Toolbar, useMediaQuery, } from '@mui/material'
import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
import { LogoMapit } from '../../assets'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { clearToken } from '../../Redux/Slices/tokenSlice';
import { useNavigate } from 'react-router-dom';
export default function NavMerchent() {

    const AppBar = styled(MuiAppBar)(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
    }));
    const isLargeScreen = useMediaQuery('(min-width: 900px)');
    const [open, setOpen] = React.useState(isLargeScreen);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    React.useEffect(() => {
        setOpen(isLargeScreen); 
      }, [isLargeScreen]);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function Logout() {
        dispatch(clearToken());
        navigate('/auth/login');
    }
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Box
                    component="img"
                    src={LogoMapit}
                    sx={{
                        width: { xs: '130px', md: '120px' },
                        display: 'flex',
                    }}
                />
                <Button onClick={Logout} color='white'>
                    Log out
                </Button>
                {!isLargeScreen && !open && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    )
}
