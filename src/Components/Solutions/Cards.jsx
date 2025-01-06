import { Button, Card, CardContent, Typography , Box, useTheme } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
export default function Cards({image, title , desc , customStayle}) {
const {t } = useTranslation()
const theme = useTheme()
const isRTL = theme.direction === 'rtl'
return (<>

        <Card
            sx={{
                maxWidth: '100%',
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' , sm:"row"},
                alignItems: 'stretch',
            }}
        >
            <CardContent
                sx={{
                    flex: 1,
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography gutterBottom sx={{ fontSize: {md:'21px' , sm:"30px"}, fontWeight: 600  }}>
                 {title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#666' , fontSize:{md:"15px" , sm:"20px"} }}>
                 {desc}
                </Typography>
                <Button
                    size="small"
                    color="primary"
                    sx={{
                        alignSelf: 'flex-start',
                        textTransform: 'none',
                        mt: 'auto',
                        fontSize:{sm:"19px" , md:"12px"}
                    }}
                >
                    {t("Learn More")}
                    <ArrowForwardIcon sx={{ fontSize: '23px', pl: "0.4rem" , transform: isRTL ? 'scalex(-1)' : 'none'}} />
                </Button>
            </CardContent>
            <Box
                component="img"
                src={image}
                sx={{
                    width: { xs: '100%', md: '327px' , sm:"50%" },
                    height: { xs: '250px' , md:'344px' ,  sm:"70vw" },
                    objectFit: 'cover',
                    p: 2,
                    transform: isRTL ? 'scaleX(-1)' :"none"
                }}
            />
        </Card>

    </>
    )
}
