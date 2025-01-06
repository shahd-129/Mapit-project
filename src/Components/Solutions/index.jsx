import { Box, Typography } from '@mui/material';
import React from 'react';
import SectionContainer from '../../Theme/SectionContainer';
import Ezpay from '../../assets/ezpay.png';
import { Zid, ZidShip, Aramex, Naqel, Salla, SaudiTech, Sobol, SolutionImage, SolutionImage2 } from '../../assets';
import SolutionCard from './SolutionCard';
import { useTranslation } from 'react-i18next';

const image = [
  { imageUrl: Zid },
  { imageUrl: ZidShip },
  { imageUrl: Salla },
  { imageUrl: Sobol },
  { imageUrl: Ezpay },
  { imageUrl: SaudiTech },
  { imageUrl: Aramex },
  { imageUrl: Naqel },
];

const customHeights = {
  4: '45px',
  3: '60px',
};
const customML = {
  4: '1rem',
  3: '0.5rem',
};

export default function Solutions() {
  const {t} = useTranslation()
   
  return (
    <Box>
      {/* <SectionContainer pxOnly={true} mxNone={true}> */}
        <Typography sx={{ textAlign: 'center', fontSize:"13px" ,pt: '2rem', mb: '1rem' }}>
          {t("In Collaboration with Industry Leaders")}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: '3rem',
            justifyContent: { xs: 'start', md: 'center' }, 
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {image.map((item, index) => (
            <Box
              component="img"
              key={index}
              src={item.imageUrl}
              alt={`Image-${index}`}
              sx={{
                width: '80px',
                height: customHeights[index] || 'auto',
                mt: customML[index] || '',
                objectFit: 'contain',
              }}
            />
          ))}
        </Box>
        <SolutionCard SolutionImage={SolutionImage} SolutionImage2={SolutionImage2} />
      {/* </SectionContainer> */}
    </Box>
  );
}
