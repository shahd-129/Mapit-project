import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { ShoppingBag, ShoppingCart, MedicalImage, LogisticImage, DropImage } from '../../assets';
import { useTranslation } from 'react-i18next';

export default function Supporting() {
    const { t } = useTranslation();
    const imageSupporting = [
        { imageUrl: MedicalImage, title: t('Medical') },
        { imageUrl: ShoppingBag, title: t('Retail') },
        { imageUrl: ShoppingCart, title: t('Ecommerce') },
        { imageUrl: DropImage, title: t('Grocery') },
        { imageUrl: LogisticImage, title: t('Logistics') },
    ];

    return (
        <Box py={'3rem'}>
            <Typography
                sx={{ fontSize: "30px", fontWeight: 600, textAlign: "center" }}
            >
                {t('Supporting Industries')}
            </Typography>

            <Container>
                <Grid
                    container
                    spacing={0} 
                    gap={0}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ py: "2.5rem" }}
                >
                    {imageSupporting.map((item, index) => (
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={1.7}
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    background: "#ECF2F9",
                                    borderRadius: '50%',
                                    width: "45px",
                                    height: "45px",
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        padding:"14px",
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        textAlign: "center",
                                        lineHeight: '3rem',
                                        fontSize: '17px',
                                        fontWeight:500,
                                        color:"rgb(30, 30, 30)"
                                    }}
                                >
                                    {t(item.title)}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
