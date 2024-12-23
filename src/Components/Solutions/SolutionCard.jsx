import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Trans, useTranslation } from 'react-i18next';

export default function SolutionCard({ SolutionImage, SolutionImage2 }) {
   const {t} = useTranslation()
    return (
        <Grid
            container
            spacing={2}
            sx={{
                maxWidth: '950px',
                margin: '1rem auto',
                pt: "2rem",
                width: '100%',
            }}
        >
            <Grid item md={4} xs={12}>
                <Typography sx={{ color: '#014E81', fontWeight: {md:600 , xs:400}, pb: '0.9rem' , pl:{xs:"0.5rem"} }}>{t("Solutions")}</Typography>
                <Typography sx={{ fontSize: {md:'35px' , xs:"22px"}, fontWeight: 600, lineHeight: "1.2" , pl:{xs:"0.5rem"}  }}>
                   {t("Fully Integrated Solutions")} 
                </Typography>
                <Typography sx={{
                    marginBottom: '2.5rem', fontSize: "14px",
                    lineHeight: "1.7", color: "rgb(30, 30, 30)",
                    pt: "0.5rem" ,  pl:{xs:"0.5rem"}
                }}>
                    <Trans>
                        {t("Mapit offers a complete suite of integrated solutions designed to streamline your delivery operations, from the first mile to the last. Our platform is built to enhance efficiency, reduce costs, and improve customer satisfaction.")}
                    </Trans>   
                </Typography>
            </Grid>
            <Grid item md={8} xs={12} sx={{ pl: { md: "5rem", xs: '2.5rem' } ,pt: { xs: "2rem", md: 0 } }}>
                <Card
                    sx={{
                        maxWidth: '100%',
                        marginBottom: '2rem',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'stretch',
                    }}
                >
                    <CardContent
                        sx={{
                            flex: 1,
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography gutterBottom sx={{ fontSize: '21px', fontWeight: 600 }}>
                            {t("Shipping, Logistics, and Carrier Solutions")}
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#666' }}>
                           {t("Mapit provides tailored solutions for shipping, logistics companies, and carriers, featuring a specialized system designed specifically for these industries. Our integrated platform helps you manage ...")}
                        </Typography>
                        <Button
                            size="small"
                            color="primary"
                            sx={{
                                alignSelf: 'flex-start',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                },
                            }}
                        >
                           {t("Learn More")}
                            <ArrowForwardIcon sx={{ fontSize: '23px', pl: "0.4rem" }} />
                        </Button>
                    </CardContent>
                    <Box
                        component="img"
                        src={SolutionImage}
                        sx={{
                            width: { xs: '100%', md: '55%' },
                            height: { xs: 'auto', md: '50%' },
                            objectFit: 'contain',
                            p: 2,
                        }}
                    />
                </Card>

                <Card
                    sx={{
                        maxWidth: '100%',
                        marginBottom: '2rem',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'stretch',
                    }}
                >
                    <CardContent
                        sx={{
                            flex: 1,
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            pb: '2rem',
                        }}
                    >
                        <Box>
                            <Typography gutterBottom sx={{ fontSize: 23, fontWeight: 600 }}>
                              {t("Last-Mile Solutions")}  
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#666' }}>
                               {t("Deliver exceptional service right to your customer's doorstep with our last-mile solutions. Mapit's advanced routing and communication tools ensure that every delivery is completed quickly and accura...")}
                               
                            </Typography>
                        </Box>

                        <Button
                            size="small"
                            color="primary"
                            sx={{
                                alignSelf: 'flex-start',
                                textTransform: 'none',
                                marginTop: 'auto',
                                mt: '3rem',
                            }}
                        >
                            {t("Learn More")}
                            <ArrowForwardIcon sx={{ fontSize: '23px', pl: "0.4rem" }} />
                        </Button>
                    </CardContent>

                    <Box
                        component="img"
                        src={SolutionImage2}
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            height: { xs: 'auto', md: '50%' },
                            objectFit: 'contain',
                            p: 2,
                        }}
                    />
                </Card>

                <Card
                    sx={{
                        maxWidth: '100%',
                        marginBottom: '2rem',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'stretch',
                    }}
                >
                    <CardContent
                        sx={{
                            flex: 1,
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            pb: '2rem',
                        }}
                    >
                        <Box>
                            <Typography gutterBottom sx={{ fontSize: 23, fontWeight: 600 }}>
                               {t("Mapit Ship")} 
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#666' }}>
                               {t("Ship your orders with the best shipping companies in KSA")} 
                            </Typography>
                        </Box>

                        <Button
                            size="small"
                            color="primary"
                            sx={{
                                alignSelf: 'flex-start',
                                textTransform: 'none',
                                marginTop: 'auto',
                                mt: '3rem',
                            }}
                        >
                            {t("Learn More")}
                            <ArrowForwardIcon sx={{ fontSize: '23px', pl: "0.4rem" }} />
                        </Button>
                    </CardContent>

                    <Box
                        component="img"
                        src={SolutionImage2}
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            height: { xs: 'auto', md: '50%' },
                            objectFit: 'contain',
                            p: 2,
                        }}
                    />
                </Card>
            </Grid>
        </Grid>
    );
}
