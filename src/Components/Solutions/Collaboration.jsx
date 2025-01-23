import React, { useEffect, useMemo } from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import { Zid, ZidShip, Aramex, Naqel, Salla, SaudiTech, Sobol, EzPay } from '../../assets';
import { cloneDeep, map, reverse } from 'lodash';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

const brands = [
    { title: "zid", icon: Zid, height: 100 },
    { title: "zid-ship", icon: ZidShip, height: 72 },
    { title: "salla", icon: Salla, height: 72 },
    { title: "sobol", icon: Sobol, height: 72 },
    { title: "ezpay", icon: EzPay, height: 58 },
    { title: "saudi-tech", icon: SaudiTech, height: 72 },
    { title: "aramex", icon: Aramex, height: 48 },
    { title: "naqel", icon: Naqel, height: 72 },
]

const TrustedBrands = ({ ...props }) => {

    const { t, i18n } = useTranslation('public');

    const theme = useTheme();

    var carouselSettings = {
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 8,
        slidesToScroll: 0,
        initialSlide: 0,
        rtl: i18n.dir() === 'rtl',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 6, slidesToScroll: 1, } },
            { breakpoint: 900, settings: { slidesToShow: 4, slidesToScroll: 1, } },
            { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } }
        ],
    };

    const brandsToDisplay = useMemo(() => {
        const array = cloneDeep(brands);
        if (theme.direction === "rtl") {
            reverse(array)
        };
        return array;
    }, [theme.direction])

    return (
        <Box sx={{ backgroundColor: 'white !important', paddingInline: { xs: 0, sm: 1, md: 4 }, paddingBlock: { xs: 0, md: 4 }, }}>
            <Typography sx={{ textAlign: 'center', fontSize: "15px", pt: '2rem', mb: '1rem' }}>
                {t("In Collaboration with Industry Leaders")}
            </Typography>
            <Box maxWidth="lg" sx={{ flex: 1, marginInline: 'auto' }}>
                <Slider {...carouselSettings} style={{ display: 'flex !important' }}>
                    {
                        map(brandsToDisplay, brand => (
                            <Box sx={{ height: '72px', display: 'flex !important', flexDirection: 'column', justifyContent: 'center' }}>
                                <Box key={brand?.title} minWidth='0px' sx={{ minHeight: '56px !important', display: 'flex !important', alignItems: 'center', justifyContent: 'center', height: brand.height }}>
                                    <img src={brand.icon} style={{ backgroundColor: 'blue !important', maxWidth: 100, maxHeight: brand.height, objectFit: "contain" }} />
                                </Box>
                            </Box>
                        ))
                    }
                </Slider>
            </Box>
        </Box>
    );
}

export default TrustedBrands;