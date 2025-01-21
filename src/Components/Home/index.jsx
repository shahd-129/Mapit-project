
import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import React from 'react';
import HomeBackground from '../../assets/hero.mp4'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Trans, useTranslation } from 'react-i18next';
export default function Home() {
  const { t } = useTranslation()
  const theme = useTheme()
  const isRtl = theme.direction === "rtl";

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: "relative",
        contain: { xs: "strict" },
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={HomeBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box sx={{ mb: "5rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: "250px",
            height: "30px",
            borderRadius: "20px",
            background: 'rgb(2, 100, 158)',
            color: 'white',
            p: 1,
            mb: "1.5rem"
          }}
        >
          <Link href="https://www.youtube.com/watch?v=HC2qmLWao0w" target="_blank" underline="none">
            <Typography
              sx={{
                display: 'flex',
                flexDirection: 'row', 
                alignItems: 'center', 
                fontSize: '12px',
                fontWeight: 500,
                mr: 2,
                color: "white",
                gap: 2,
              }}
            >
              <Box mr={5}>{t('Mapit New Updates')}</Box>
              <Box mr={5}>|</Box>
              <Box mr={5}>{t('Watch Video')}</Box>
            </Typography>

          </Link>
          <ArrowForwardIcon sx={{ fontSize: '23px', pl: "0.4rem", 
            transform: isRtl ? 'scaleX(-1)' : "none", }} />
        </Box>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{
            color: 'white',
            fontSize: { xs: '40px', sm: '50px', md: '48px' },
            fontWeight: "600",
            mb: "1rem"
          }}
        >
          <Trans>
            {t('Innovative Delivery Solutions From Origin to Destination')}
          </Trans>
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            color: 'white',
            mb: "1.4rem",
            fontSize: "19px",
            fontWeight: 200
          }}
        >
          <Trans>

            {t("Top teams rely on Mapit for seamless, efficient delivery from anywhere to anywhere.")}
          </Trans>
        </Typography>
        <Box display={'flex'} justifyContent={'center'} flexDirection={'row'}>
          <Link href="https://www.mapit.sa/free-demo" underline="none">
            <Button
              sx={{
                background: '#FFBA21',
                textTransform: 'none',
                color: 'black',
                fontSize: '12px',
                fontWeight: 600,
                padding: 2,
                py: "0.6rem",
                px: "1.2rem",
              }}
            >
              {t("Get a Demo for Free")}
            </Button>
          </Link>
          <Link href="https://www.mapit.sa/features" target="_blank" >
            <Button sx={{ color: "white", textTransform: "none", fontSize: '12px', ml: "0.8rem", mt: "0.2rem" }}>
              {t("Explore Mapit")}
            </Button>
          </Link>
        </Box>

      </Box>
    </Box>
  );
}
