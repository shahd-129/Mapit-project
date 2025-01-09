import React from 'react'
import { useTranslation } from 'react-i18next'
import { Zid, ZidShip, Aramex, Naqel, Salla, SaudiTech, Sobol } from '../../assets';
import Ezpay from '../../assets/ezpay.png';
import { Box, Container, Typography } from '@mui/material';


const image = [
    { imageUrl: Zid },
    { imageUrl: ZidShip },
    { imageUrl: Salla },
    { imageUrl: Sobol },
    { imageUrl: Ezpay },
    { imageUrl: SaudiTech },
    { imageUrl: Aramex },
    { imageUrl: Naqel },
];

const customHeights = {
    4: '50px',
    3: '65px',
};
const customML = {
    4: '1rem',
    3: '0.5rem',
};

export default function Collaboration() {
    const { t } = useTranslation()

    return (
        <Container>
            <Box>

                <Typography sx={{ textAlign: 'center', fontSize: "15px", pt: '2rem', mb: '1rem' }}>
                    {t("In Collaboration with Industry Leaders")}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: "3.7rem",
                        justifyContent: { xs: 'start', md: 'center' },
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    {image.map((item, index) => (
                        <Box
                            component="img"
                            key={index}
                            src={item.imageUrl}
                            alt={`Image-${index}`}
                            sx={{
                                width: '80px',
                                height: customHeights[index] || 'auto',
                                mt: customML[index] || '',
                                objectFit: 'contain',
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    )
}
