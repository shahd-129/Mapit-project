import React from 'react';
import { Card, CardContent, CardMedia, Typography, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureCard from './FeatureCard';

export default function FearturesSlider({ features }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
                <FeatureCard key={index} img_width='100%' feature={feature} direction="column-reverse" />
            ))}
        </Slider>
    );
}
