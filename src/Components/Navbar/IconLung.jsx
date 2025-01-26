import { Box, Button, Menu } from '@mui/material'
import React from 'react'
import { setLanguage } from '../../Redux/Slices/languageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function IconLung({ ENImage, ARImage }) {
    const { t} = useTranslation()

    const { language } = useSelector(state => state?.lang)
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleLanguageClick = (event) => {
       setAnchorEl(event.currentTarget);
      };
    
      const handleCloseLanguageMenu = () => {
        setAnchorEl(null);
      };
    


    return (<>
        <Box display="flex" alignItems="center" sx={{ display: { xs: "none", md: "flex" } }} gap={0}>
            <Box
                component="img"
                src={language === 'ع' ? ARImage : ENImage}
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
                }}>

                <Box display="flex" alignItems="center" gap={1}>
                    <Box display="flex" alignItems="center" sx={{ minWidth: '230px', height: "70px", background: "#f9fafb" }} gap={0}>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between",
                            flexDirection: "row-reverse",
                            alignItems: "center", m: "auto",
                            background: 'rgb(249, 250, 251)'
                        }}>

                          
                            <Button
                                sx={{
                                    fontSize: '12px',
                                    color: language === 'EN' ? 'black' : "rgb(102, 112, 133)",
                                    textTransform: 'none',
                                    background: language === 'EN' ? '#ccc' : 'transparent',
                                    // m:"1.5rem"

                                }}
                                onClick={() => dispatch(setLanguage(('EN')))}
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
                                        color: language === 'ع' ? 'black' : "rgb(102, 112, 133)",
                                        textTransform: 'none',
                                        minWidth: 'auto',
                                        background: language === 'ع' ? '#ccc' : 'transparent',

                                    }}
                                    onClick={() => dispatch(setLanguage(('ع')))}
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
    </>
    )
}
