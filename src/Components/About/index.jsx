import React from 'react';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionContainer from '../../Theme/SectionContainer';
import BackgroundAbout from '../../assets/logo-gradient.a7269bf1.svg';
import { Trans, useTranslation } from 'react-i18next';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function About() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === "rtl";
    return (
        <Box sx={{ bgcolor: '#FAFAFA', py: '3rem', position: 'relative', width: "100%" }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: 0,
                    bottom: "70px",
                    width: { md: '20%', xs: "100%", sm: "100%" },
                    height: { md: '100%', xs: "50%" },
                    backgroundImage: `url(${BackgroundAbout})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isRtl ? 'scaleX(-1)' : "none",
                }}
            />
            <Container>
                <Grid container spacing={30} alignItems="center" >
                    <Grid item xs={12} md={6}>
                        <LiteYouTubeEmbed
                            id="gUW0V-yvZk0"
                            title="YouTube video player"
                            containerClassName="youtube-container"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pl: { md: "40px" }, mt: "2rem" }}>
                            <Typography sx={{ color: 'rgb(0, 71, 171)', fontWeight: 500, mb: '1rem' }}>
                                {t("About Mapit")}
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{ fontWeight: 600, mb: 3, fontSize: { xs: '1.75rem', md: '2.2rem' } }}
                            >
                                {t("Revolutionising Delivery Management")}
                            </Typography>
                            <Typography sx={{ color: 'rgb(30, 30, 30)', mt: 8, fontSize: { md: "17px", xs: "15px" }, fontWeight: 300 }}>
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
                                <ArrowForwardIcon sx={{ fontSize: '23px', pl: '0.4rem' }} />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}
