import { Button, Card, CardContent, Typography , Box } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
export default function Cards({image, title , desc , customStayle}) {
const {t , i18n} = useTranslation()

const isRTL = i18n.dir() === 'rtl'
return (<>

        <Card
            sx={{
                maxWidth: '100%',
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' },
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
                <Typography gutterBottom sx={{ fontSize: '21px', fontWeight: 600 }}>
                 {title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#666' , fontSize:"15px" }}>
                 {desc}
                </Typography>
                <Button
                    size="small"
                    color="primary"
                    sx={{
                        alignSelf: 'flex-start',
                        textTransform: 'none',
                        // marginTop: customStayle[2] ? 'auto' : 'none',
                        mt: 'auto'
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
                    width: { xs: '100%', md: '50%' },
                    // height: { xs: 'auto' },
                    objectFit: 'cover',
                    p: 2,
                }}
            />
        </Card>

    </>
    )
}
