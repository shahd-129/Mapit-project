import React from "react";
import { Box, Typography, useMediaQuery, Button, Container, useTheme } from "@mui/material";
import { FeatuerImage, FeatuerImage2, FeatuerImage3, ButtonShadow } from "../../assets";
import { Trans, useTranslation } from "react-i18next";
import FeaturesSlider from "./FeatureSlider";
import FeaturesCard from "./FeaturesCard";
import { CustomContainer } from "../common";

const FeaturesSection = () => {
    const { t } = useTranslation();
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const features = [
        {
            title: t("Automated Shipment Assignment"),
            description: t("Automatically assign shipments to drivers and display the specific shipments for each driver through an easy-to-use app."),
            image: FeatuerImage2,
        },
        {
            title: t("Precise Customer Location"),
            description: t("Accurately determine the customer’s location during or after order placement, ensuring seamless delivery without the need for additional customer contact."),
            image: FeatuerImage,
        },
        {
            title: t("Efficient Shipment Sorting"),
            description: t("Facilitate your warehouse operations by automatically sorting shipments based on the regions and neighborhoods you serve."),
            image: FeatuerImage3,
        },
    ];

    return (
        <CustomContainer>
            <Typography
                sx={{
                    color: "#0047ab",
                    fontSize: "17px",
                    fontWeight: 500,
                    textAlign: "center",
                    marginBottom: "1rem",
                }}
            >
                {t('Features')}
            </Typography>
            <Typography
                sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    textAlign: "center",
                    marginBottom: "2rem",
                }}
            >
                {t("Designed to Solve Last-Mile Challenges")}
            </Typography>


            {isSmallScreen ?
                <FeaturesSlider features={features} />
                :
                <FeaturesCard features={features} />
            }
            {/* <Box

        width='500px'
        height='100px'
        sx={{
            backgroundSize: "420px 120px",
            backgroundImage: `url(${ButtonShadow})`,
           
        }}
    >

        <Box sx={{ textAlign: "center", mt: "3rem", display: "flex", justifyContent: "center" }}>
            <Button
                sx={{
                    color: "white",
                    background: "rgb(1, 88, 140)",
                    textTransform: "none",
                    fontSize: "17px",
                }}
            >
                {t('See All Features')}
            </Button>
        </Box>

    </Box> */}
        </CustomContainer>

    );
};

export default FeaturesSection;

