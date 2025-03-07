import { Box, Button, Typography, useTheme } from "@mui/material";
import { FooterImage, FooterImage2 } from "../../assets";
import { useTranslation } from "react-i18next";
export default function TryMapitSec() {
    const { t } = useTranslation()
    const theme = useTheme()
    const isRtl = theme.direction === "ltr";

    return (<>
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column" },
                bgcolor: "#01588C",
                position: "relative",
                overflow: "hidden",
                borderTopLeftRadius: { md: "200px", xs: "0" },
                mt: "3rem",
                height: { md: "350px", xs: "500px" },
              
            }}
        >
            <Box
                sx={{
                    flex: 0.5,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#01588C",
                    width: "100%"
                }}
            >

                <Box
                    position={"absolute"}
                    component={"img"}
                    top={0}
                    maxHeight={"200px"}
                    src={FooterImage}
                    alt="Background Image Right"
                    right={0}
                    sx={{
                        transform: isRtl ? 'none' : "scaleX(-1)",
                        zIndex: { xs: 999 }
                    }}

                /> 

                 <Box
                    component={"img"}
                    left={0}
                    sx={{
                        width: { xs: "100%", md: "350px" },
                        maxHeight: { md: "400px", xs: "200px" },
                        objectFit: 'cover',
                        top: { md: "1%" },
                        maxWidth: { md: "100%" },
                        position: { xs: "static", md: "absolute" },
                        transform: isRtl ? 'none' : "scaleX(-1)",

                    }}
                    src={FooterImage2}
                    alt="Background Image Left"
                />
            </Box>

            <Box
                sx={{
                    flex: 3,
                    textAlign: "center",
                    color: "white",
                    position: "relative",
                    maxWidth: "600px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    padding: '32px 16px 40px'

                }}
            >
                <Typography sx={{ fontSize: { md: "48px", xs: "30px" }, fontWeight: 600, mb: 2 }}>
                    {t("Try for free today")}
                </Typography>
                <Typography sx={{ mb: 2, maxWidth: "700px" , fontSize:{xs:"16px" , md:"20px"} , fontWeight:300 , px:{xs:5} }}>
                    {t("Become part of a growing community of businesses optimizing their delivery operations. Start your free trial today and see how Mapit can transform your logistics!")}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row", sm: "row" },
                        gap: { xs: "1rem", md: "0" },
                        alignItems: "center",
                        justifyContent: "center",
                        p: { xs: "1rem" },
                    }}
                >
                    <Button
                        sx={{
                            background: "#FFBA21",
                            color: "black",
                            fontSize: "14px",
                            textTransform: "none",
                            mr: { md: "1rem", xs: "0" },
                            p:"6px 16px",
                        }}
                    >
                        {t("Get a Demo for Free")}
                    </Button>
                    <Button
                        sx={{
                            color: "white",
                            textTransform: "none",
                            fontSize: "14px",
                        }}
                    >
                        {t("Explore Mapit")}
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
    )
}
