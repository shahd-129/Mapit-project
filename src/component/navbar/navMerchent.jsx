import { Box, Button, Container, IconButton, styled, Toolbar, useMediaQuery, } from '@mui/material'
import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
// import { LogoMapit } from '../../assets'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { clearToken } from '../../redux/slice/tokenSlice';
import { useNavigate } from 'react-router-dom';
import IconLung from './iconLung';
import { LogoMapit, ENImage, ARImage } from '../../assets';
import { useTranslation } from 'react-i18next';
import DrowerNavMerchent from '../../view/drowerNavMerchent';
export default function NavMerchent() {

    const AppBar = styled(MuiAppBar)(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
    }));
    const isLargeScreen = useMediaQuery('(min-width: 1110px)');
    const [open, setOpen] = React.useState(isLargeScreen);
    const { t } = useTranslation()
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
    return (<>
    
    <AppBar position="fixed">
        <Container>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }} >
               
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        sx={{display:{md:'none' , xs:"block"} }}
                        onClick={() => handleDrawerOpen(true)} 
                    >
                        <MenuIcon />
                    </IconButton>
              
                <Box
                    component="img"
                    src={LogoMapit}
                    sx={{ width: { xs: '130px', md: '120px' }, display: 'flex' }}
                />
                <Box sx={{ display: "flex", flexDirection: "row"  }}>
                    <Button sx={{m:10}} onClick={Logout} color='white'>
                        {t("Log out")}
                    </Button>
                    <IconLung ENImage={ENImage} ARImage={ARImage} />
                </Box>
            </Toolbar>

        </Container>
        </AppBar>

        <DrowerNavMerchent open={open} handleDrawerOpen={handleDrawerOpen} />
    
    </>
    )
}
