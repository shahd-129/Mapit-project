import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BackGroundLogin } from '../../assets';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useTranslation } from 'react-i18next';
import AccountAcsess from '../Register/AccountAcsess';
import { validation } from './joiValidation';
import { useLoginMutation } from '../../Redux/Api/login';
import { useDispatch } from 'react-redux';
import { setToken } from '../../Redux/Slices/tokenSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { t } = useTranslation()
   
    
    const [inputValue, setInputValue] = useState({ email: "", password: "" })


    const handleChange = (event) => {
        const { name, value } = event.target
        setInputValue((prev) => ({
            ...prev, [name]: value
        }))
    }


    const [login] = useLoginMutation()
    const [errors, setError] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelSendData = async (event) => {
        event.preventDefault();
        const errorValidation = validation(inputValue)
        setError(errorValidation)
        if (errorValidation) return
        try {
            const res = await login(inputValue).unwrap()
            if (res?.success) {
                const token = res?.body?.token;
                dispatch(setToken(token));
                navigate('/merchent')
            }
            console.log(res);

        } catch (err) {
            console.log(err);

        }


    }


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
                        <Paper sx={{ mt: 25, padding: 3, display: "flex", justifyContent: "center" }}>
                            <Box py={25} >
                                <Box component={'form'} onSubmit={handelSendData}>
                                    <TextField
                                        placeholder="e.g name@domain.com"
                                        label={t("Email")}
                                        variant="standard"
                                        name={"email"}
                                        value={inputValue?.email}
                                        onChange={handleChange}
                                        error={!!errors?.email}
                                        helperText={errors?.email}
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
                                        name='password'
                                        value={inputValue?.password}
                                        error={!!errors?.password}
                                        helperText={errors?.password}
                                        onChange={handleChange}
                                        fullWidth
                                        type='password'
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
                                    <Button type='submit' sx={{ background: "#FC9E16", color: "black", width: "90%", mt: 40 }}>
                                        {t('Login')}
                                    </Button>

                                </Box>
                            </Box>
                        </Paper>
                    </Grid>


                    <AccountAcsess typographyText={t("Don't have an account?")} pathLink={'/auth/signup'} width={'80%'} buttonClick={t("Create Account")} />
                </Box>
            </Box>
        </>
    );
}
