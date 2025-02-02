import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { BackGroundLogin } from '../../assets';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useTranslation } from 'react-i18next';
import AccountAcsess from '../Register/AccountAcsess';

export default function Login() {
    const { t } = useTranslation()
    return (
        <>
            <Box sx={{ position: 'relative', width: '100%', height: '100vh', background: "#01588C" }}>

                <Box
                    component="img"
                    src={BackGroundLogin}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '45%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}
                >

                    <Typography color="white" fontSize="32px" fontWeight={600}>
                        {t('Login to Your Account')}
                    </Typography>
                   
                    <Grid item md={7} xs={12} sm={9} lg={6}>
                        <Paper sx={{ mt: 25, padding: 3,  display: "flex", justifyContent: "center" }}>
                            <Box py={25} >

                                <TextField
                                    placeholder="e.g name@domain.com"
                                    label={t("Email")}
                                    variant="standard"
                                    sx={{ width: "90%" }}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    sx={{ mt: 30, width: "90%" }}
                                    label={t('Password')}
                                    placeholder='******'
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Typography textAlign={'right'} fontSize={'14px'} pr={20} pt={10}>
                                    {t('Forget Password?')}
                                </Typography>
                                <Button sx={{ background: "#FC9E16", color: "black", width: "90%", mt: 40 }}>
                                    {t('Login')}
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

            
                    <AccountAcsess typographyText={t("Don't have an account?")} pathLink={'/auth/signup'} width={'80%'} buttonClick={t("Create Account")}/>
                </Box>
            </Box>
        </>
    );
}
