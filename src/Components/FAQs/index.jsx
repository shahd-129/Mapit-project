import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { CustomContainer } from '../common';

export default function FAQs() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    const { t } = useTranslation()

    const contentAccordion = [
        {
            Typography: t("Is there a free trial available?"), TypographyContent: t("Yes, Mapit offers a 30-day free trial for new users. This trial includes full access to our logistics management platform, allowing you to experience the benefits of streamlined delivery operations firsthand. No credit card required.")
        },
        {
            Typography: t("Can I change my plan later?"), TypographyContent: t("Absolutely! You can upgrade or downgrade your plan at any time based on your needs. Changes will be reflected in the next billing cycle.")
        },
        {
            Typography: t("What is your cancellation policy?"), TypographyContent: t("You can cancel your subscription at any time. There are no cancellation fees, though no refunds are provided for the remaining period of the subscription.")
        },
        {
            Typography: t("What is the meaning of Mapit?"), TypographyContent: t("The name 'Mapit' reflects our commitment to precision and efficiency in logistics.It signifies our ability to map out the most effective routes and strategies for delivery management,ensuring optimal results for our clients.")
        },
    ]

    return (
        <>
            <Box>
                <CustomContainer>
                    <Grid container >

                        <Grid item md={4} xs={12}>
                            <Typography sx={{ fontSize: "40px", fontWeight: 600, pl: { xs: "0.5rem" } }}>
                                {t("FAQs")}
                            </Typography>
                        </Grid>


                        <Grid item md={8} xs={12}>
                            <Box sx={{
                                width: '100%',
                                py: { xs: 32 }
                            }}>
                                {contentAccordion.map((content, index) => (
                                    <Accordion
                                        key={index}
                                        elevation={0}
                                        sx={{
                                            mr: { md: '1rem', xs: "0rem" },
                                            pl: { xs: "1rem" },
                                            pr: { md: "2rem", xs: "1rem" },
                                            '&::before': {
                                                display: 'none',
                                            },
                                            backgroundColor: expanded === `panel${index}` ? '#F9FAFB' : 'white',
                                        }}
                                        expanded={expanded === `panel${index}`}
                                        onChange={handleChange(`panel${index}`)}
                                    >
                                        <AccordionSummary
                                            sx={{

                                                '&::before': {
                                                    BorderBottom: "none",
                                                    display: 'none',
                                                },
                                                color: expanded === `panel${index}` ? 'rgb(0, 71, 171)' : 'black',
                                            }}
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`panel${index}bh-content`}
                                            id={`panel${index}bh-header`}
                                        >
                                            <Typography sx={{ width: '100%', fontSize: { md: "20px", xs: "20px" }, fontWeight: 500 }}>
                                                {t(content.Typography)}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography sx={{ fontSize: "16px", pb: 15 }}>
                                                {t(content.TypographyContent)}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </CustomContainer>
            </Box>
        </>
    )
}
