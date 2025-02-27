import { Box, Button , Drawer } from '@mui/material'
import React from 'react'
import { setLanguage } from '../../redux/slice/languageSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ENImage, ARImage } from '../../assets';


export default function CustomDrawer({ setDrawerOpen, drawerOpen , pages ,handlePopoverOpen }) {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };


    return (<>

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
                    onClick={(e) => {
                        if (page.id === '1') {
                          handlePopoverOpen(e);
                        }
                      }}
                    sx={{
                        fontSize: '15px',
                        fontWeight:500,
                        color: "black",
                        textTransform: "none",
                        padding: '1rem',
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start"

                    }}
                >
                    {t(page.label)}
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
                        onClick={() => dispatch(setLanguage(('EN')))}
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
                        onClick={() => dispatch(setLanguage(('ع')))}
                    >
                        {t('العربية')}
                    </Button>
                </Box>
            </Box>
        </Drawer>

    </>
    )
}
