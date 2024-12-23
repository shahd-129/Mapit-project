import React from "react";
import { Box, Grid, Card, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FeatuerImage, FeatuerImage2, FeatuerImage3 } from "../../assets";
import { Trans, useTranslation } from "react-i18next";
import { Pagination } from "swiper/modules";
import SectionContainer from "../../Theme/SectionContainer";

const FeaturesSection = () => {
    const { t } = useTranslation();
    const isSmallScreen = useMediaQuery("(max-width: 900px)"); 

    const features = [
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
        {
            title: t("Automated Shipment Assignment"),
            description: t("Automatically assign shipments to drivers and display the specific shipments for each driver through an easy-to-use app."),
            image: FeatuerImage2,
        },
    ];

    return (
        <Box
            sx={{
                padding: "2rem",
                backgroundColor: "#f9f9f9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
          
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
                <Trans>{t("Designed to Solve Last-Mile Challenges")}</Trans>
            </Typography>

          
            {isSmallScreen ? (
                <Swiper
                    spaceBetween={20}
                    // pagination={{ clickable: true }}
                    modules={[Pagination]}
                    style={{ width: "100%" , paddingRight:"3rem" }}
                >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index}>
            <Card
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: "1rem",
              }}
            >
              <CardMedia
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{ width: "100%", height: "200px", marginBottom: "1rem" }}
              />
              <CardContent>
                <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 300, marginTop: "8px" }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
              <SectionContainer>

                <Grid container spacing={50} alignItems="center">
                <Grid item xs={12} md={6} container spacing={25} direction="column">
                    <Grid item>
                        <Card sx={{ display: "flex", alignItems: "center", width: "500px", height: "350px" }}>
                            <CardContent sx={{ flex: 1, width: "300px", p: "1.5rem", mb: "4rem" }}>
                                <Typography sx={{ fontSize: "25px", fontWeight: 600, mt: 0 }}>
                                    {t("Precise Customer Location")}
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
                                    {t('Accurately determine the customer’s location during or after order placement, ensuring seamless delivery without the need for additional customer contact.')}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                src={FeatuerImage}
                                alt="Precise Customer Location"
                                sx={{ width: '200px', height: '400px', margin: 2 }}
                            />
                        </Card>

                    </Grid>
                    <Grid item>
                        <Card sx={{ display: "flex", alignItems: "center",width: "500px", height: "350px"  }}>
                            <CardContent sx={{ flex: 1, width: "300px" ,  p: "1.5rem", mb: "4rem" }}>
                                <Typography sx={{ fontSize: "25px", fontWeight: 600, mt: 0 }}>
                                    {t("Efficient Shipment Sorting")}
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
                                    {t("Facilitate your warehouse operations by automatically sorting shipments based on the regions and neighborhoods you serve.")}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                src={FeatuerImage3}
                                alt="Efficient Shipment Sorting"
                                sx={{ width: '200px' ,  height: '400px', m: 2 }}
                            />
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
                    <Card sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ width: "300px" , p: '1.5rem', pb: "5rem" , pt:"1.5rem" }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: 600, mt: 0 }}>
                                {t("Automated Shipment Assignment")}
                            </Typography>
                            <Typography sx={{ fontSize: "17px", fontWeight: 300 }}>
                               
                                {t("Automatically assign shipments to drivers and display the specific shipments for each driver through an easy-to-use app.")}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            src={FeatuerImage2}
                            alt="Automated Shipment Assignment"
                            sx={{ width: "450px", height: "450px", objectFit: "cover" }}
                        />
                    </Card>
                </Grid>
            </Grid>
              </SectionContainer>

            )}
        </Box>
    );
};

export default FeaturesSection;



