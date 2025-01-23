import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function FeatureCard({ feature, direction = "row", height, img_height, img_width , padding }) {
    return (
        <Paper sx={{ display: "flex", alignItems: "stretch", height, flexDirection: direction }}>
            <Box sx={{ flex: 1, p: 32  , padding}}>
                <Typography sx={{ fontSize: {md:"28px" , xs:"15px"}, fontWeight: 600, mt: 0 }}>
                    {feature?.title}
                </Typography>
                <Typography sx={{ fontSize: {md:"16px" , xs:"18px"}, fontWeight: 300 }}>
                    {feature?.description}
                </Typography>
            </Box>
            <img
                src={feature?.image}
                alt={feature?.title}
                width={img_width}
                height={img_height}
                style={{ objectFit: "cover", overflow: "hidden" }}
            />
        </Paper>
    )
}
