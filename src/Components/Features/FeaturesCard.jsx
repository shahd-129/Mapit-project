import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { FeatuerImage, FeatuerImage2, FeatuerImage3 } from "../../assets";
export default function FeaturesCard() {

  const { t } = useTranslation();


    return (<>
        <Grid container spacing={30}>
            <Grid item xs={12} md={6} sm={12}>
                <Box sx={{ display: "flex", flexDirection: "column" }} >
                    <Paper sx={{ display: "flex", alignItems: "stretch", height: "350px" }}>
                        <Box sx={{ flex: 1, p: 40 }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: 600, mt: 0 }}>
                                {t("Precise Customer Location")}
                            </Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
                                {t('Accurately determine the customer’s location during or after order placement, ensuring seamless delivery without the need for additional customer contact.')}
                            </Typography>
                        </Box>
                        <img
                            src={FeatuerImage}
                            alt="Precise Customer Location"
                            width={'40%'}
                            height={'100%'}
                            style={{ objectFit: "cover", overflow: "hidden" }}
                        />
                    </Paper>


                    <Paper sx={{ display: "flex", alignItems: "stretch", height: "350px", mt: '2rem' }}>
                        <Box sx={{ flex: 1, p: 50 }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: 600, mt: 0 }}>
                                {t("Efficient Shipment Sorting")}
                            </Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
                                {t('Facilitate your warehouse operations by automatically sorting shipments based on the regions and neighborhoods you serve.')}
                            </Typography>
                        </Box>
                        <img
                            src={FeatuerImage3}
                            alt="Efficient Shipment Sorting"
                            width={'40%'}
                            height={'100%'}
                            style={{ objectFit: "cover", overflow: "hidden" }}
                        />
                    </Paper>
                </Box>
            </Grid>


            <Grid item xs={12} md={6}>
                <Paper sx={{ display: "flex", alignItems: "stretch", flexDirection: "column", height: "100%", width: "488px" }}>
                    <Box sx={{ flex: 1, p: 32 }}>
                        <Typography sx={{ fontSize: "28px", fontWeight: 600, mt: 0 }}>
                            {t("Automated Shipment Assignment")}
                        </Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
                            {t("Automatically assign shipments to drivers and display the specific shipments for each driver through an easy-to-use app.")}
                        </Typography>
                    </Box>
                    <img
                        src={FeatuerImage2}
                        alt="Automated Shipment Assignment"
                        width={'100%'}
                        height={'100%'}

                        style={{ objectFit: "cover", paddingTop: "1.5rem" }}
                    />
                </Paper>
            </Grid>
        </Grid>
    </>
    )
}


























// import { Box, Paper, Typography } from '@mui/material'
// import React from 'react'

// export default function FeaturesCard({ feature, img_width = "45%", img_height, direction = "row" }) {
//   return (
//     <Paper dir="rtl">
//       <Box display="flex" flexDirection={direction}>
//         <Box p={32}>
//           <Typography variant="h4" sx={{ mb: 20 }}>{feature?.title}</Typography>
//           <Typography variant="body1">{feature?.description}</Typography>
//         </Box>
//         <img
//           src={feature?.image}
//           alt={feature?.title}
//           width={img_width}
//           height={img_height}
//           style={{ objectFit: "cover" }}
//         />
//       </Box>
//     </Paper>
//   )
// }

