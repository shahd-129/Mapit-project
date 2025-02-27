import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ContentSection() {
 
 const {t} = useTranslation()
    const paperDetails = [{ text: t("Basic Details"), descrip: t("A few details about company") },
        { text: t("Account"), descrip: t("Your accout details") }, { text: t("Password"), descrip: t("Setup your account password") }]
      
 
    return (
  <Grid item md={5} lg={4}>
      
      {paperDetails.map((paper, index) => (<>
    
            <Box pl={'25px'} key={index} color='rgba(0, 0, 0, 0.6)' mb={2}>
              <Typography fontSize={'14px'} fontWeight={600}>
                {paper.text}
              </Typography>
              <Typography fontSize={'14px'} fontWeight={400}>
                {paper.descrip}
              </Typography>
            </Box>
            <Box pl={'10px'}>
              {index !== paperDetails.length - 1 && (
                <Box sx={{ borderLeft: '1px solid rgba(0, 0, 0, 0.2)', height: '20px', mt: 1 }} />
              )}
    
            </Box>
          </>
          ))}
              </Grid>
  
  )
}
