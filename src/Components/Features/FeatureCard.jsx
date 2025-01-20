import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function FeatureCard({ feature, direction = "row", height, img_height, img_width }) {
    return (
        <Paper sx={{ display: "flex", alignItems: "stretch", height, flexDirection: direction }}>
            <Box sx={{ flex: 1, p: 35 }}>
                <Typography sx={{ fontSize: "25px", fontWeight: 600, mt: 0 }}>
                    {feature?.title}
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
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
