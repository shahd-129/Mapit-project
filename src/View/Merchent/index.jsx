import React from 'react'
import { useGetMerchentQuery } from '../../Redux/Api/merchent'
import { Box, Container, Typography } from '@mui/material'


export default function Merchent() {

    const {data } = useGetMerchentQuery()
     const userData = data;
     console.log(userData);
     
    
    
    return (
     <Box height={500} width={500} display={'flex'} justifyContent={'center'}>
            <Container sx={{px:50}}>

            <Typography >name: {userData?.name}</Typography>
            <Typography >email: {userData?.email}</Typography>
            <Typography >phone: {userData?.phone}</Typography>
            <Typography >role: {userData?.role}</Typography>

            </Container>
     </Box>
    )
}
