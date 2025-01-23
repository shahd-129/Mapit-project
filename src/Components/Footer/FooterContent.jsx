import { Box, Button, Container, Divider, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { AppStore, LogoFooter, PlayStore } from "../../assets";
import { CustomContainer } from '../common';
export default function FooterContent() {
    const { t } = useTranslation();

    return (

        <CustomContainer >

            <Grid container spacing={20}>
                <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", flexDirection: "column", mb: 2, pb: "1rem", pl: { md: "10px" } }}>

                    <Box component="img" src={LogoFooter} sx={{ width: "100px", mb: 3, ml: { xs: '0' } }} />
                    <Typography sx={{ fontSize: "15px", color: "#333", mb: 1, lineHeight: "1.5rem", }}>
                        {t("AT TAKHASSUSI RD. - AL NAKHEEL DIS.Riyadh")}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", lineHeight: "1.5rem", mb: 1, "&:hover": { color: "#FFBA21" } }}>
                        {t('+966 58 184 9999')}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", lineHeight: "1.5rem", color: "#333", "&:hover": { color: "#FFBA21" } }}>
                        info@mapit.sa
                    </Typography>
                    <Box sx={{ pt: '1.5rem', display: "flex", gap: '1rem' }}>
                        <Link href='https://x.com/mapit_sa' target="_blank"  >
                            <TwitterIcon sx={{ color: "black", "&:hover": { color: "#FFBA21" } }} />

                        </Link>
                        <Link href="https://www.linkedin.com/company/mapit-sa/" target="_blank" >
                            <LinkedInIcon sx={{ color: "black", "&:hover": { color: "#FFBA21" } }} />
                        </Link>
                        <Link href='https://api.whatsapp.com/send/?phone=966581849999' target="_blank" >
                            <WhatsAppIcon sx={{ color: "black", "&:hover": { color: "#FFBA21" } }} />
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={6} md={2} sx={{ display: "flex", flexDirection: "column", mt: { md: '2rem' }, pb: "1rem" }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: "600", color: "#01588C", mb: 2 }}>
                        {t('Mapit')}
                    </Typography>
                    {[t("About Mapit"), t("Features"), t("Pricing"), t("Blog"), t("Contact Us")].map((item, index) => (
                        <Typography
                            key={index}
                            sx={{
                                fontSize: "14px",
                                color: "#333",
                                lineHeight: "1.5rem",
                                p: "0.2rem",
                                mb: 1,
                                cursor: "pointer",
                                "&:hover": { color: "#FFBA21" },
                            }}
                        >
                            {t(item)}
                        </Typography>
                    ))}
                </Grid>


                <Grid item xs={6} sm={6} md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mt: { md: '2rem' } }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: "600", color: "#01588C", mb: 2 }}>
                        {t("Solutions")}
                    </Typography>
                    {[t("Shipping and Logistics"), t("Last-Mile"), t("Mapit Ship")].map((item, index) => (
                        <Typography
                            key={index}
                            sx={{
                                fontSize: "14px",
                                color: "#333",
                                mb: 1,
                                lineHeight: "1.5rem",
                                p: "0.2rem",
                                cursor: "pointer",
                                "&:hover": { color: "#FFBA21" },
                            }}
                        >
                            {t(item)}
                        </Typography>
                    ))}
                </Grid>


                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mt: { md: '2rem' } }}>
                    <Typography sx={{ fontSize: "13px", pb: '0.5rem' }}>{t("Stay up to date")}</Typography>
                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <TextField
                            label={t("Enter Your Email")}
                            size="small"
                            sx={{
                                flex: 1,
                                width: { md: "200px", xs: "100%", sm: "100%" },
                                height: "30px",
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "#C4C4C4" },
                                    "&:hover fieldset": { borderColor: "#01588C" },
                                },
                            }}
                        />
                        <Button
                            sx={{
                                background: "#01588C",
                                color: "white",
                                textTransform: "none",
                                height: "40px",
                                fontWeight: 300,
                                ml: "0.7rem",
                                p: "1rem",
                                mt: "0.5rem",
                                "&:hover": { background: "#FFBA21" },
                            }}
                        >
                            {t("Subscribe")}
                        </Button>
                    </Box>
                    <Typography sx={{ fontSize: "14px", color: "#333", mb: 1, pt: "1.5rem" }}>
                        {t("Download Mapit App")}
                    </Typography>
                    <Box display="flex" gap={2} pt={'0.5rem'}>
                        <Link href="https://apps.apple.com/ba/app/mapit-last-mile-solutions/id1587487704" target="_blank" >
                            <Box
                                component="img"
                                src={AppStore}
                                alt="App Store"
                                sx={{ width: "120px", cursor: "pointer", pr: "0.5rem" }}
                            />
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.mapit.mapitdriver" target="_blank" >
                            <Box component="img" src={PlayStore} alt="Play Store" sx={{ width: "120px", cursor: "pointer" }} />
                        </Link>
                    </Box>
                </Grid>

                <Divider variant="middle" sx={{ width: "100%", pt: { xs: "1.5rem" } }} />
            </Grid>

        </CustomContainer>


    );
}


