import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, Paper, Popover } from '@mui/material';
import { aboutIconCompany, aboutIconCompany2, aboutIconCompany3 } from '../../assets';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useTranslation } from 'react-i18next';

const CompanyNav = ({ anchorEl, setAnchorEl }) => {
    const { t } = useTranslation();
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const isPopoverOpen = Boolean(anchorEl);
    const popoverId = isPopoverOpen ? 'company-popover' : undefined;


    return (<>
        <Popover
            id={popoverId}
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            sx={{
                width: { md: '90%', xs: '100%' },
                height: { md: 'auto', xs: '75%' }, top: 60, p: 3,
                py: 50, overflowY: { xs: 'auto' }, position: "fixed"
            }}
        >
            <Typography
                sx={{
                    color: 'black',
                    fontSize: '16px',
                    cursor: 'pointer',
                    px: { xs: 15 },
                    py: { xs: 15, md: 0.5 },
                    display: { md: "none", xs: "block" }
                }}
                onClick={handlePopoverClose}
            >
                {t('Back to menu')}
            </Typography>
            <Grid container py={20}>
                <Grid item md={4} xs={12} sm={12} px={24}  >
                    <Typography
                        sx={{
                            color: 'black',
                            fontSize: '16px',
                            fontWeight: 500,
                        }}
                    >
                        {t('Company')}
                    </Typography>

                    <Box py={10}>
                        <Box display={'flex'} flexDirection={'row'}>
                            <Box
                                sx={{
                                    background: '#ECF2F9',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',


                                }}
                            >
                                <Box component={'img'} src={aboutIconCompany} sx={{ p: 7 }} />
                            </Box>
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                sx={{ marginInlineStart: '16px' }}
                            >
                                <Typography sx={{ color: 'black', fontWeight: 500 }}>
                                    {t('About')}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'rgb(30, 30, 30)',
                                        fontWeight: 300,
                                        fontSize: '14px',
                                    }}
                                >
                                    {t(
                                        'Streamline your first and last-mile deliveries, boost efficiency, and improve customer satisfaction.'
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box py={10}>
                        <Box display={'flex'} flexDirection={'row'}>
                            <Box
                                sx={{
                                    background: '#ECF2F9',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',


                                }}
                            >
                                <Box component={'img'} src={aboutIconCompany2} sx={{ p: 7 }} />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} sx={{ marginInlineStart: '16px' }}>
                                <Typography sx={{ color: 'black', fontWeight: 500 }}>
                                    {t("Careers")}
                                </Typography>
                                <Typography sx={{ color: 'rgb(30, 30, 30)', fontWeight: 300, fontSize: '14px' }}>
                                    {t("Join our team and grow your career with us.")}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>


                    <Box py={10}>
                        <Box display={'flex'} flexDirection={'row'}>
                            <Box
                                sx={{
                                    background: '#ECF2F9',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',

                                }}
                            >
                                <Box component={'img'} src={aboutIconCompany3} sx={{ p: 7 }} />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} sx={{ marginInlineStart: '16px' }}>
                                <Typography sx={{ color: 'black', fontWeight: 500 }}>
                                    {t("Contact Us")}
                                </Typography>
                                <Typography sx={{ color: 'rgb(30, 30, 30)', fontWeight: 300, fontSize: '14px' }}>
                                    {t("Discover how we can optimize your deliveries and help you scale.")}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>


                </Grid>

                <Grid item md={3} xs={12} sm={12} px={30}>
                    <Typography
                        sx={{
                            color: 'black',
                            fontSize: '16px',
                            fontWeight: 500,
                        }}
                    >
                        {t('More')}
                    </Typography>
                    <Box py={15}>
                        <Typography sx={{ fontSize: '16px', color: 'black' }}>
                            {t('Privacy Policy')}
                        </Typography>

                        <Typography
                            sx={{ fontSize: '16px', color: 'black', mt: 20 }}
                        >
                            {t('Documentation')}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item md={5} xs={12} sm={12} pr={70} px={30}>
                    <Paper sx={{ width: '300px' }}>
                        <LiteYouTubeEmbed
                            id="HC2qmLWao0w"
                            title="YouTube video player"
                            containerClassName="youtube-container"
                        />
                        <Box sx={{ flex: 1, p: '1.5rem' }}>
                            <Typography
                                sx={{ fontSize: '16px', fontWeight: 500, mt: 0 }}
                            >
                                {t(
                                    'Enhancing operational efficiency and customer satisfaction'
                                )}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '18px', md: '14px' },
                                    fontWeight: 300,
                                }}>
                                {t(
                                    'Through innovative solutions, auto sorting, fleet management, route optimization, and real-time tracking.'
                                )}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Popover>
    </>
    )
};

export default CompanyNav;
