import { Box, Button, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { BackGroundLogin } from '../../assets'
import { useTranslation } from 'react-i18next'
import EmailIcon from '@mui/icons-material/Email';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AccountAcsess from './AccountAcsess';

export default function Register() {
  const { t } = useTranslation()


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const paperDetails = [{ text: t("Basic Details"), descrip: t("A few details about company") },
  { text: t("Account"), descrip: t("Your accout details") }, { text: t("Password"), descrip: t("Setup your account password") }]


  return (
    <Box bgcolor={'#01588C'} width={'100%'} minHeight={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Box component={'img'} src={BackGroundLogin} sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
    
    <Box zIndex={1}>
      <Typography color='white' fontSize={'25px'} fontWeight={600} textAlign={'center'} mb={3}>
        {t('Create New Account')}
      </Typography>
  
      <Paper sx={{ display: "flex" , m:"auto" , flexDirection: "column", py: 25, px: 15 , width:"50%" }}>
        <Grid container spacing={3}>
          <Grid item md={5} lg={4}>
            {paperDetails.map((paper, index) => (<>
            
              <Box pl={'25px'} key={index} color='rgba(0, 0, 0, 0.6)' mb={2}>
                <Typography fontSize={'14px'} fontWeight={600}>
                  {paper.text}
                </Typography>
                <Typography fontSize={'14px'} fontWeight={400}>
                  {paper.descrip}
                </Typography>
              </Box>
                <Box pl={'10px'}>
                {index !== paperDetails.length - 1 && (
                  <Box sx={{ borderLeft: '1px solid rgba(0, 0, 0, 0.2)', height: '20px', mt: 1 }} />
                )}

                </Box>
            </>
            ))}
          </Grid>
  
          <Grid item md={7} lg={8}>
            <InputLabel id="register-select-label">{t("Register as *")}</InputLabel>
            <Select sx={{ width: "70%" }}  size='small' labelId="register-select-label" value={age} onChange={handleChange}>
              <MenuItem value={10}>{t("A Shipping Company")}</MenuItem>
              <MenuItem value={20}>{t("A Merchant")}</MenuItem>
            </Select>
  
            <TextField label={t('Company Name *')} placeholder='Name' variant="standard" sx={{ mt: 10 , width:"70%" }} />
            <TextField label={t('Logo/Avatar *')} variant="standard" sx={{ mt: 10 , width:"70%"  }} />
            <InputLabel id="order-select-label" sx={{ mt: 10 }}>{t("Average Order per Month *")}</InputLabel>
            <Select sx={{ width:"70%" }} size='small' labelId="order-select-label" value={age} onChange={handleChange}>
              <MenuItem value={10}>100 - 1000</MenuItem>
              <MenuItem value={20}>1000 - 5000</MenuItem>
              <MenuItem value={30}>5000 - 10000</MenuItem>
              <MenuItem value={40}>more than 10000</MenuItem>
            </Select>
  
            <TextField label={t('Website(Optional)')} placeholder="e.g name@domain.com" variant="standard"  sx={{ mt: 10 , width:"70%"  }} />
            <TextField label={t('Name')} placeholder='Name' variant="standard"  sx={{ mt: 10  , width:"70%" }} />
            <TextField label={t("Email")} placeholder="e.g name@domain.com" variant="standard"  sx={{ mt: 10 , width:"70%"  }} InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment> }} />
            <TextField label={t('Phone')} placeholder='Phone' variant="standard"  sx={{ mt: 10 , width:"70%"  }} />
            <Button sx={{ background: "#FC9E16", color: "black", width: "70%", mt: 15 }}>
              {t('Signup')}
            </Button>
          </Grid>
        </Grid>
      </Paper>
  
     <AccountAcsess typographyText={t("Have already account")} pathLink={'/auth/login'} width={'40%'} buttonClick={t('Login')}/>
    </Box>
  </Box>
  


  )
}
