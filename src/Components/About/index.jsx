import React from 'react';
import { Box, Typography, Grid, Button, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionContainer from '../../Theme/SectionContainer';
import BackgroundAbout from '../../assets/logo-gradient.a7269bf1.svg';
import { Trans, useTranslation } from 'react-i18next';

export default function About() {
    const { t , i18n } = useTranslation()
    const isRtl = i18n.dir() === "rtl";
    const isSmallScreen = useMediaQuery('(max-width:800px)');
    return (
        <Box sx={{ bgcolor: '#FAFAFA', py: '3rem', position: 'relative' }}>

            <Box
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: 0,
                    bottom:"70px",
                    width: { md: '20%', xs: "10%" },
                    height: { md: '100%', xs: "50%" },
                    backgroundImage: `url(${BackgroundAbout})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isRtl ? 'scaleX(-1)' : "none",
                }}
            ></Box>

            <SectionContainer mlOnly={true} pxOnly={true}>
                <Grid container spacing={2} alignItems="center" sx={{ gap: '0rem' }}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                aspectRatio: '16 / 9',
                                overflow: 'hidden',
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/gUW0V-yvZk0"
                                title="YouTube video player"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    marginBottom:"5rem",
                                    width: isSmallScreen ? '100%' : '100%',
                                    height: '70%',
                                    border: 'none',

                                    marginLeft: isSmallScreen ? 0 : '2rem',
                                    paddingLeft: isSmallScreen ? 0 : '8rem',
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{ width: { md: "545px" }, pl: { md: "40px" } , mt:"2rem" }}
                        >
                            <Typography
                                component="span"
                                sx={{ color: 'rgb(0, 71, 171)', fontWeight: 500, mb: 2, display: 'block' }}
                            >
                                {t("About Mapit")}
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{ fontWeight: 600, mb: 3, fontSize: { xs: '1.75rem', md: '2.2rem' } }}
                            >
                                <Trans>
                                    {t("Revolutionising Delivery Management")}
                                </Trans>

                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mt: 8, fontSize: { md: "17px", xs: "15px" } }}>

                                {t("Mapit is a system specialized in managing and automating first and last-mile delivery operations to enhance operational efficiency and increase customer satisfaction. Our platform enhances operational efficiency and customer satisfaction through innovative solutions, auto sorting, fleet management, route optimization, and real-time tracking. By automating key processes, Mapit empowers businesses to streamline their delivery operations, reduce costs, and meet the demands of modern logistics. Our technology ensures timely, efficient service with full visibility throughout the delivery journey, transforming how companies manage and execute their deliveries.")}

                            </Typography>
                            <Button
                                size="small"
                                color="primary"
                                href="#"
                                sx={{
                                    textTransform: 'none',
                                    marginTop: '0.9rem',
                                }}
                            >
                                {t("Learn More")}
                                <ArrowForwardIcon sx={{ fontSize: '23px', pl: '0.4rem' }} />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

            </SectionContainer>
        </Box>
    );
    //  "Mapit is a system specialized in managing and automating first and last-mile delivery operations to enhance operational efficiency and increase customer satisfaction. Our platform enhances operational efficiency and customer satisfaction through innovative solutions, auto sorting, fleet management, route optimization, and real-time tracking. By automating key processes, Mapit empowers businesses to streamline their delivery operations, reduce costs, and meet the demands of modern logistics. Our technology ensures timely, efficient service with full visibility throughout the delivery journey, transforming how companies manage and execute their deliveries.": "Mapit is a system specialized in managing and automating first <br /> and last-mile delivery operations to enhance operational <br /> efficiency and increase customer satisfaction. Our platform <br /> enhances operational efficiency and customer satisfaction <br /> through innovative solutions, auto sorting, fleet management, <br /> route optimization, and real-time tracking. By automating key <br /> processes, Mapit empowers businesses to streamline their <br /> delivery operations, reduce costs, and meet the demands of <br /> modern logistics. Our technology ensures timely, efficient service <br /> with full visibility throughout the delivery journey, transforming <br /> how companies manage and execute their deliveries.",
    //  "Mapit is a system specialized in managing and automating first and last-mile delivery operations to enhance operational efficiency and increase customer satisfaction. Our platform enhances operational efficiency and customer satisfaction through innovative solutions, auto sorting, fleet management, route optimization, and real-time tracking. By automating key processes, Mapit empowers businesses to streamline their delivery operations, reduce costs, and meet the demands of modern logistics. Our technology ensures timely, efficient service with full visibility throughout the delivery journey, transforming how companies manage and execute their deliveries.": "    مابت هو نظام مختص في إدارة وأتمتة عمليات التوصيل في الميل الأول والميل الأخير <br/>لرفع كفاءة التشغيل، ورفع مستوى رضى العميل. تعمل منصتنا على تعزيز الكفاءة <br/>التشغيلية ورضا العملاء من خلال الحلول المبتكرة والفرز التلقائي وإدارة الأسطول <br/> وتحسين المسار والتتبع في الوقت الفعلي. من خلال أتمتة العمليات الرئيسية، تمكن<br/>  مابت الشركات  من تبسيط عمليات التوصيل الخاصة بها وخفض التكاليف وتلبية <br/>  متطلبات الخدمات اللوجستية الحديثة.  تضمن تقنيتنا خدمة فعالة في الوقت  <br/> المناسب مع رؤية كاملة طوال رحلة التوصيل، مما يحول كيفية إدارة الشركات وتنفيذ<br/>   عمليات التوصيل الخاصة بها."
}
