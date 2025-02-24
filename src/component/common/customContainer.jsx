import { Box } from '@mui/material'
import React from 'react'

export default function CustomContainer({ children }) {
    return (
        <Box
            // py={40}
            px={{
                xs:16,
                sm: 15,
                md: 20,
                lg: 170,
                xl: 210,
            }}
            >
            {children}
        </Box>
    )
}
