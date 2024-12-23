
import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import HomeBackground from '../../assets/hero.mp4'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Trans, useTranslation } from 'react-i18next';
export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: "relative",
          contain: {xs:"strict"},
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
          <Link href="https://www.youtube.com/watch?v=HC2qmLWao0w" target="_blank"   underline="none">
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '12px',
              fontWeight:600,
              mr: 2,
              color:"white"
            }}
          >
            {t('Mapit New Updates | Watch Video')}
          </Typography>
          </Link>
          <ArrowForwardIcon sx={{ fontSize: '23px', pl: "0.4rem" }} />
        </Box>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{
            color: 'white',
            fontSize: { xs: '40px', sm: '50px', md: '40px' },
            fontWeight: "bold",
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
            fontSize:"19px",
            fontWeight:200
          }}
        >
          <Trans>

         {t("Top teams rely on Mapit for seamless, efficient delivery from anywhere to anywhere.")}
          </Trans>
        </Typography>
        <Box>
          <Link href="https://www.mapit.sa/free-demo">
          <Button sx={{ background: "#FFBA21", color: "black", fontSize: "10px", textTransform: "none", mr: "1rem" }}>
            {t("Get a Demo for Free")}
          </Button>
          </Link>
        <Link href="https://www.mapit.sa/features"   target="_blank" >
          <Button sx={{ color: "white", textTransform: "none", fontSize: '12px' }}>
            {t("Explore Mapit")}
          </Button>
        </Link>
        </Box>
      </Box>

    </>
  );
}
