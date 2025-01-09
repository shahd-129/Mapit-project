import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function FooterCopyrightSec() {
    const { t } = useTranslation()

    return (
        <Container sx={{px:{xs:"1.5rem"}}} >
            <Box sx={{ display: 'flex', flexDirection: { md: "row", xs: "column" }, justifyContent: "space-between", width: "100%", my: "1.5rem" }} >

                <Typography sx={{ fontSize: "14px" }} >
                    {t('©2024 mapit. All rights reserved.')}
                </Typography>
                <Box sx={{ flexDirection: { md: "row" }, display: "flex", fontSize: "12px", }} >
                    <Typography mr={'1rem'} sx={{ "&:hover": { color: "#FFBA21" } }}>{t('Privacy Policy')}</Typography>
                    <Typography sx={{ "&:hover": { color: "#FFBA21" } }}>{t('Documentation')}</Typography>
                </Box>
            </Box>

        </Container>
    )
}
