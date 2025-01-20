import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { FeatuerImage, FeatuerImage2, FeatuerImage3 } from "../../assets";
export default function FeaturesCard() {

    const { t } = useTranslation();


    return (<>
        <Container>

            <Grid container sx={{ pt: '2rem' }}>
                <Grid item xs={12} md={6} sm={12}  >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                        <Paper sx={{ display: "flex", alignItems: "stretch", height: "350px", width: "90%" }}>
                            <Box sx={{ flex: 1, p: 35 }}>
                                <Typography sx={{ fontSize: "25px", fontWeight: 600, mt: 0 }}>
                                    {t("Precise Customer Location")}
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
                                    {t('Accurately determine the customer’s location during or after order placement, ensuring seamless delivery without the need for additional customer contact.')}
                                </Typography>
                            </Box>
                            <img
                                src={FeatuerImage}
                                alt="Precise Customer Location"
                                width={'40%'}
                                height={'100%'}
                                style={{ objectFit: "cover", overflow: "hidden" }}
                            />
                        </Paper>


                        <Paper sx={{ display: "flex", alignItems: "stretch", height: "350px", mt: '2rem', width: "90%" }}>
                            <Box sx={{ flex: 1, p: 32 }}>
                                <Typography sx={{ fontSize: "25px", fontWeight: 600, mt: 0 }}>
                                    {t("Efficient Shipment Sorting")}
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
                                    {t('Facilitate your warehouse operations by automatically sorting shipments based on the regions and neighborhoods you serve.')}
                                </Typography>
                            </Box>
                            <img
                                src={FeatuerImage3}
                                alt="Efficient Shipment Sorting"
                                width={'40%'}
                                height={'100%'}
                                style={{ objectFit: "cover", overflow: "hidden" }}
                            />
                        </Paper>
                    </Box>
                </Grid>


                <Grid container  xs={12} md={5}>
                    <Paper sx={{ display: "flex", alignItems: "stretch", flexDirection: "column", height: "100%" }}>
                        <Box sx={{ flex: 1, p: 32 }}>
                            <Typography sx={{ fontSize: "28px", fontWeight: 600, mt: 0 }}>
                                {t("Automated Shipment Assignment")}
                            </Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
                                {t("Automatically assign shipments to drivers and display the specific shipments for each driver through an easy-to-use app.")}
                            </Typography>
                        </Box>
                        <img
                            src={FeatuerImage2}
                            alt="Automated Shipment Assignment"
                            width={'100%'}
                            height={'100%'}
                            style={{ objectFit: "cover", pt: "4rem" }}
                        />
                    </Paper>
                </Grid>

            </Grid>

        </Container>


    </>
    )
}

