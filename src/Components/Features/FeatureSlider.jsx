import React from 'react';
import { useTheme, useMediaQuery, Paper, Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function FeaturesSlider({ features }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isRtl = theme.direction === 'rtl';

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isSmallScreen ? 1 : 2,
        slidesToScroll: 1,
        arrows: false,
        rtl: isRtl,
    };

    return (
        <Slider {...settings}>
            {features.map((feature, index) => (
                <Box key={index} sx={{ px: {sm:"1.5rem" , xs:"1rem"} }}>
                    <Paper
                        sx={{
                            display: "flex",
                            alignItems: "stretch",
                            height: "350px",
                            flexDirection: "column-reverse",
                        }}
                    >
                        <Box sx={{ flex: 1, p: "1.5rem" }}>
                            <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 0 }}>
                                {feature.title}
                            </Typography>
                            <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
                                {feature.description}
                            </Typography>
                        </Box>
                        <img
                            src={feature.image}
                            alt={feature.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                overflow: "hidden",
                            }}
                        />
                    </Paper>
                </Box>
            ))}
        </Slider>
    );
}
