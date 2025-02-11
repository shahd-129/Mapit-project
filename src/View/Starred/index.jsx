import React from 'react'
import { useGetMerchentQuery } from '../../Redux/Api/merchent';
import { Box, Container, Typography } from '@mui/material';

export default function Starred() {
    const {data} = useGetMerchentQuery()
   
    
   
   
   return (
    <Box height={500} width={500} display={'flex'} justifyContent={'center'}>
           <Container sx={{px:50}}>

           <Typography >name: {data?.name}</Typography>
           <Typography >email: {data?.email}</Typography>
           <Typography >phone: {data?.phone}</Typography>
           <Typography >role: {data?.role}</Typography>

           </Container>
    </Box>
    )
}
