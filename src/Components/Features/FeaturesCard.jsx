import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';

export default function FeaturesCard({ features }) {

    const { t } = useTranslation();

    return (
        <Grid container spacing={30}>
            <Grid item xs={12} md={6} sm={12}>
                <Stack spacing={30}>
                    <FeatureCard
                        feature={features[1]}
                        height={"350px"}
                        img_height="100%"
                        img_width="40%"
                    />

                    <FeatureCard
                        feature={features[2]}
                        height={"350px"}
                        img_height="100%"
                        img_width="40%"
                    />
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <FeatureCard
                    feature={features[0]}
                    direction={"column"}
                    height={"100%"}
                    img_height={'70%'}
                    img_width={'100%'}
                />
            </Grid>
        </Grid>
    )
}

