import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function FeatureCard({ feature, img_width = "45%", img_height, direction = "row" }) {
  return (
    <Paper dir="rtl">
      <Box display="flex" flexDirection={direction}>
        <Box p={32}>
          <Typography variant="h4" sx={{ mb: 20 }}>{feature?.title}</Typography>
          <Typography variant="body1">{feature?.description}</Typography>
        </Box>
        <img
          src={feature?.image}
          alt={feature?.title}
          width={img_width}
          height={img_height}
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Paper>
  )
}
