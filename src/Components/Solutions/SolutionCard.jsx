import {  Grid, Typography } from '@mui/material';
import React from 'react';
// import Cards from './cards';
import { Trans, useTranslation } from 'react-i18next';
import Cards from './Cards'
export default function SolutionCard({ SolutionImage, SolutionImage2 }) {
    const { t } = useTranslation()

    const cardSolutions = [{
        title: t("Shipping, Logistics, and Carrier Solutions"), description: t("Mapit provides tailored solutions for shipping, logistics companies, and carriers, featuring a specialized system designed specifically for these industries. Our integrated platform helps you manage ...")
        ,imageUrl : SolutionImage ,  customStyle: false
    },
    { title: t("Last-Mile Solutions"), description: t("Deliver exceptional service right to your customer's doorstep with our last-mile solutions. Mapit's advanced routing and communication tools ensure that every delivery is completed quickly and accura...") , imageUrl: SolutionImage2 ,  customStyle: false}
    , { title: t("Mapit Ship"), description: t("Ship your orders with the best shipping companies in KSA")  , imageUrl: SolutionImage2 ,  customStyle: false }]



    return (
        <Grid
            container
            spacing={2}
            sx={{
                maxWidth: '1050px',
                margin: '1rem auto',
                pt: "2rem",
                width: '100%',
                // ml:"5rem"
            }}
        >
            <Grid item md={4} xs={12}>
                <Typography sx={{ color: '#014E81', fontWeight: { md: 600, xs: 400 }, pb: '0.9rem', pl: { xs: "0.5rem" } }}>{t("Solutions")}</Typography>
                <Typography sx={{ fontSize: { md: '35px', xs: "22px" }, fontWeight: 600, lineHeight: "1.2", pl: { xs: "0.5rem" } }}>
                    {t("Fully Integrated Solutions")}
                </Typography>
                <Typography sx={{
                    marginBottom: '2.5rem', fontSize: "14px",
                    lineHeight: "1.7", color: "rgb(30, 30, 30)",
                    pt: "0.5rem", pl: { xs: "0.5rem" }
                }}>
                    <Trans>
                        {t("Mapit offers a complete suite of integrated solutions designed to streamline your delivery operations, from the first mile to the last. Our platform is built to enhance efficiency, reduce costs, and improve customer satisfaction.")}
                    </Trans>
                </Typography>
            </Grid>
            <Grid item md={8} xs={12} sx={{ pl: { md: "5rem", xs: '2.5rem' }, pt: { xs: "2rem", md: 0 } }}>
                  {cardSolutions.map((card) => (<Cards  title={card.title} desc={card.description} image={card.imageUrl} customStayle={card.customStyle}/>) )}   
            </Grid>
        </Grid>
    );
}
