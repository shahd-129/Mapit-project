import { Box, Grid,  Paper,  Typography } from '@mui/material'
import React from 'react'
import { BackGroundLogin } from '../../assets'
import { useTranslation } from 'react-i18next'
import AccountAcsess from './AccountAcsess';
import TextFieldSection from './TextFieldSection';
import ContentSection from './ContentSection';

export default function Register() {
  const { t } = useTranslation()



  return (
    <Box bgcolor={'#01588C'} width={'100%'} minHeight={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box component={'img'} src={BackGroundLogin} sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />

      <Box zIndex={1}>
        <Typography color='white' fontSize={'25px'} fontWeight={600} textAlign={'center'} mb={3}>
          {t('Create New Account')}
        </Typography>

        <Paper sx={{ display: "flex", m: "auto", flexDirection: "column", py: 25, px: 15, width: "50%" }}>
          <Grid container spacing={45}>
            <ContentSection/>

        <TextFieldSection/>
          </Grid>
        </Paper>

        <AccountAcsess typographyText={t("Have already account")} pathLink={'/auth/login'} width={'40%'} buttonClick={t('Login')} />
      </Box>
    </Box>



  )
}
