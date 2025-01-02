import { Grid, Stack } from '@mui/material'
import React from 'react'
import FeatureCard from './FeatureCard'

export default function FeaturesCardsList({
    features
}) {
    return (
        <Grid container spacing={30}>
            <Grid item md={6} sx={{ display: "flex", alignItems: "stretch" }}>
                <FeatureCard feature={features[0]} direction="column" img_height={600} img_width="100%" />
            </Grid>
            <Grid item md={6}>
                <Stack spacing={30}>
                    <FeatureCard feature={features[1]} img_height={400} />
                    <FeatureCard feature={features[2]} img_height={400} />
                </Stack>
            </Grid>
        </Grid>
    )
}
