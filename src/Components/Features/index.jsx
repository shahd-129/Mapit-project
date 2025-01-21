import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FeatuerImage, FeatuerImage2, FeatuerImage3, ButtonShadow } from "../../assets";
import { useTranslation } from "react-i18next";
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
            <Box py={45}>

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
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                }}>
                    <Typography
                        sx={{
                            fontSize: "40px",
                            fontWeight: 600,
                            textAlign: "center",
                            marginBottom: "2rem",
                            width: { md: "40%" }
                        }}
                    >
                        {t("Designed to Solve Last-Mile Challenges")}
                    </Typography>

                </Box>
                {isSmallScreen ?
                    <FeaturesSlider features={features} />
                    :
                    <FeaturesCard features={features} />
                }
                <Box display={'flex'} justifyContent={'center'}>
                    <Box

                        width='500px'
                        height='100px'
                        sx={{
                            backgroundSize: "420px 120px",
                            backgroundImage: `url(${ButtonShadow})`,

                        }}
                    >

                        <Box sx={{ textAlign: "center", mt: "3rem", }}>
                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "17px",
                                }}
                            >
                                {t('See All Features')}
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </CustomContainer >

    );
};

export default FeaturesSection;