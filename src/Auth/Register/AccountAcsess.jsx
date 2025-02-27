import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function AccountAcsess({ typographyText, pathLink, width , buttonClick }) {
  const { t } = useTranslation()
  return (<>
    <Grid container justifyContent="center" mt={20}>
      <Box bgcolor={'#004E82'} px={15} py={15} display={'flex'} borderRadius={2} alignItems={'center'} justifyContent={'space-between'} width={width}>
        <Box>
          <Typography color='white' fontSize={'14px'}>
            {typographyText}
          </Typography>
          <Typography color='white' fontSize={'20px'} fontWeight={600}>
            {t("Try for free today")}
          </Typography>
        </Box>
        <Link to={pathLink}>
          <Button sx={{ background: "white", color: "black", fontSize: "15px", textTransform: "none" }}>
            {buttonClick}
          </Button>
        </Link>
      </Box>
    </Grid>

    <Typography color='white' textAlign={'center'} mt={40}>
      {t("©2024 mapit. All rights reserved.")}
    </Typography>
  </>
  )
}
