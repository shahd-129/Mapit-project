import { Button, Typography, Box, useTheme, Paper } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
export default function Cards({ image, title, desc }) {
    const { t } = useTranslation()
    const theme = useTheme()
    const isRTL = theme.direction === 'rtl'
    return (<>

        <Box  >

            <Paper
                sx={{
                    marginBottom: '2rem',
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row', sm: "row" },
                    alignItems: 'stretch',
                    mx:"0.5rem"

                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        p: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        
                    }}
                >
                    <Typography gutterBottom sx={{ fontSize: { md: '28px', sm: "30px" }, fontWeight: 600 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{
                        marginBottom: '1rem', color: "rgb(30, 30, 30)",
                        fontWeight: 300,
                        fontSize: { md: "17px", sm: "20px" }
                    }}>
                        {desc}
                    </Typography>
                    <Button
                        size="small"
                        color="primary"
                        sx={{
                            alignSelf: 'flex-start',
                            textTransform: 'none',
                            mt: 'auto',
                            fontSize: { sm: "19px", md: "12px" }
                        }}
                    >
                        {t("Learn More")}
                        <ArrowForwardIcon sx={{ fontSize: '23px', pl: "0.4rem", ml: "0.5rem", transform: isRTL ? 'scalex(-1)' : 'none' }} />
                    </Button>
                </Box>
                <Box
                    component="img"
                    src={image}
                    sx={{
                        width: { xs: '100%', md: '50%', sm: "50%" },
                        height: { xs: '250px', md: '344px', sm: "70vw" },
                        objectFit: 'cover',
                        p: 2,
                        transform: isRTL ? 'scaleX(-1)' : "none"
                    }}
                />
            </Paper>
        </Box>


    </>
    )
}
