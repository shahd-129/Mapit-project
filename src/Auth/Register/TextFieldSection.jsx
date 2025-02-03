import { Button, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
export default function TextFieldSection() {
  const { t } = useTranslation()

  const [inputValue, setInputValue] = React.useState({
    email: "",
    password: "",
    company: "",
    name: "",
    phone: "",
    website: "",
    logo: "",
    averageOrder: "",
    registerAs: ""


  });

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log('clicked!');

  };
  return (<Grid item md={7} lg={8}>
    <InputLabel id="register-select-label">{t("Register as *")}</InputLabel>
    <Select variant='standard' sx={{ width: "70%" }} size='small' labelId="register-select-label" value={inputValue.registerAs} onChange={handleChange}>
      <MenuItem value={10}>{t("A Shipping Company")}</MenuItem>
      <MenuItem value={20}>{t("A Merchant")}</MenuItem>
    </Select>

    <TextField label={t('Company Name *')} placeholder='e.g Mapit Solutions LTD' variant="standard" sx={{ mt: 10, width: "70%" }} InputProps={{ startAdornment: <InputAdornment position="start"><BusinessIcon /></InputAdornment> }} />
    <TextField label={t('Logo/Avatar *')} variant="standard" sx={{ mt: 10, width: "70%" }} />
    <InputLabel id="order-select-label" sx={{ mt: 10 }}>{t("Average Order per Month *")}</InputLabel>
    <Select variant='standard' sx={{ width: "70%" }} size='small' labelId="order-select-label" value={inputValue.averageOrder} onChange={handleChange}>
      <MenuItem value={10}>100 - 1000</MenuItem>
      <MenuItem value={20}>1000 - 5000</MenuItem>
      <MenuItem value={30}>5000 - 10000</MenuItem>
      <MenuItem value={40}>more than 10000</MenuItem>
    </Select>

    <TextField label={t('Website(Optional)')} placeholder="e.g name@domain.com" variant="standard" sx={{ mt: 10, width: "70%" }} InputProps={{ startAdornment: <InputAdornment position="start"><AttachFileIcon /></InputAdornment> }} />
    <TextField label={t('Name')} placeholder='Name' variant="standard" sx={{ mt: 10, width: "70%" }} />
    <TextField label={t("Email")} placeholder="e.g name@domain.com" variant="standard" sx={{ mt: 10, width: "70%" }} InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment> }} />
    <TextField label={t('Phone')} placeholder='Phone' variant="standard" sx={{ mt: 10, width: "70%" }} />
    <Button sx={{ background: "#FC9E16", color: "black", width: "70%", mt: 15 }}>
      {t('Signup')}
    </Button>
  </Grid>
  )
}
