import { Grid, Typography, Box, Container } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Cards from './Cards'
import { CustomContainer } from '../common';
export default function SolutionCard({ SolutionImage, SolutionImage2 }) {
    const { t } = useTranslation()

    const cardSolutions = [{
        title: t("Shipping, Logistics, and Carrier Solutions"),
        description: t("Mapit provides tailored solutions for shipping, logistics companies, and carriers, featuring a specialized system designed specifically for these industries. Our integrated platform helps you manage ...")
        , imageUrl: SolutionImage
    },
    {
        title: t("Last-Mile Solutions"),
        description: t("Deliver exceptional service right to your customer's doorstep with our last-mile solutions. Mapit's advanced routing and communication tools ensure that every delivery is completed quickly and accura..."), imageUrl: SolutionImage2
    }
        , {
            title: t("Mapit Ship"),
        description: t("Ship your orders with the best shipping companies in KSA"), imageUrl: SolutionImage2
    }]



    return (
        <CustomContainer>
            <Grid
                container
                spacing={30}
                sx={{
                    py: 40
                }}
            >
                <Grid item md={4} xs={12}  >
                    <Box >
                        <Typography sx={{
                            color: '#014E81', fontWeight: { md: 600, xs: 400 },
                            pb: '0.9rem'
                        }}>{t("Solutions")}</Typography>
                        <Typography sx={{
                            fontSize: { md: '35px', xs: "22px" },
                            fontWeight: 600, lineHeight: "1.2"
                        }}>
                            {t("Fully Integrated Solutions")}
                        </Typography>
                        <Typography sx={{
                            marginBottom: '2.5rem', fontSize: "17px",
                            color: "rgb(30, 30, 30)", fontWeight: 300,
                            pt: "0.5rem",
                        }}>

                            {t("Mapit offers a complete suite of integrated solutions designed to streamline your delivery operations, from the first mile to the last. Our platform is built to enhance efficiency, reduce costs, and improve customer satisfaction.")}
                        </Typography>
                    </Box>

                </Grid>

                <Grid item md={8} xs={12}>
                    {cardSolutions.map((card) => (<Cards title={card.title}
                        desc={card.description} image={card.imageUrl} />))}
                </Grid>
            </Grid>

        </CustomContainer>
    );
}
