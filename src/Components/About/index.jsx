import React from 'react';
import { Box, Typography, Grid, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BackgroundAbout from '../../assets/logo-gradient.a7269bf1.svg';
import { useTranslation } from 'react-i18next';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import {CustomContainer} from '../common'
export default function About() {
    const { t} = useTranslation();
     const theme = useTheme()
        const isRTL = theme.direction === 'rtl'
    return (
       
        <Box sx={{ bgcolor: '#FAFAFA', py: '2.5rem', position: 'relative', width: "100%" }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: { xs: '20%', md: "35%" },
                    left: 0,
                    bottom: "70px",
                    width: { md: '25%', xs: "100%", sm: "100%" },
                    height: { md: '100%', xs: "50%" },
                    backgroundImage: `url(${BackgroundAbout})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isRTL ? 'scaleX(-1)' : "none",
                }}
            />
            <CustomContainer >
                <Grid container spacing={20} alignItems="center" >
                    <Grid item xs={12} md={6} sx={{  mb: { md: 144 }  }}>
                        <LiteYouTubeEmbed
                            id="gUW0V-yvZk0"
                            title="YouTube video player"
                            containerClassName="youtube-container"
                            
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ pl: { md: "40px" }, mt: "1rem" }} width={'100%'}>
                            <Typography sx={{ color: 'rgb(0, 71, 171)', fontWeight: 500, mb: '1rem' , fontSize:"18px"}}>
                                {t("About Mapit")}
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{ fontWeight: 600, mb: 3, fontSize: { xs: '28px', md: '40px' } }}
                            >
                                {t("Revolutionising Delivery Management")}
                            </Typography>
                            <Typography sx={{ color: 'rgb(30, 30, 30)', mt: 8, fontSize: { md: "18px", xs: "14px" }, fontWeight: 300 }}>
                                {t("Mapit is a system specialized in managing and automating first and last-mile delivery operations to enhance operational efficiency and increase customer satisfaction. Our platform enhances operational efficiency and customer satisfaction through innovative solutions, auto sorting, fleet management, route optimization, and real-time tracking. By automating key processes, Mapit empowers businesses to streamline their delivery operations, reduce costs, and meet the demands of modern logistics. Our technology ensures timely, efficient service with full visibility throughout the delivery journey, transforming how companies manage and execute their deliveries.")}
                            </Typography>
                            <Button
                                size="small"
                                color="primary"
                                href="#"
                                sx={{
                                    textTransform: 'none',
                                    marginTop: '0.9rem',
                                }}
                            >
                                {t("Learn More")}
                                <ArrowForwardIcon sx={{ fontSize: '23px', 
                                     ml:"0.5rem", transform: isRTL ? 'scalex(-1)' : 'none' }} />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </CustomContainer>
        </Box>
      
    );
}
