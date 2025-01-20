import { Box } from '@mui/material'
import React from 'react'

export default function CustomContainer({ children }) {
    return (
        <Box
            py={56}
            px={{
                xs: 5,
                sm: 15,
                md: 20,
                lg: 100,
                xl: 210,
            }}>
            {children}
        </Box>
    )
}
