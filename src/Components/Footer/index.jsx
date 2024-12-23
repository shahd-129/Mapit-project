import { Box, Button, Typography } from "@mui/material";
import { AppStore, FooterImage, FooterImage2, LogoFooter, PlayStore } from "../../assets";
import FooterContent from "./FooterContent";
import { Trans, useTranslation } from "react-i18next";


export default function Footer() {
    const { t } = useTranslation()
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column" },
                    bgcolor: "#01588C",
                    minHeight: { md: "500px", xs: "200px" },
                    position: "relative",
                    overflow: "hidden",
                    borderTopLeftRadius: { md: "200px", xs: "0" },
                    pb: "3rem",
                    my: "4rem",
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
                    />

                    <Box
                        component={"img"}
                        left={0}
                        sx={{
                            width: { xs: "100%" , md:"350px" },
                            maxHeight: { md: "400px", xs: "250px" },
                            objectFit: 'cover',
                            top:{md:"1%"},
                            maxWidth:{md:"100%"},
                            position: { xs: "static", md: "absolute" }
                        }}
                        src={FooterImage2}
                        alt="Background Image Left"
                    />
                </Box>

                <Box
                    sx={{
                        flex: 3,
                        textAlign: "center",
                        // width:{xs:"300px"},
                        py: {md:"5rem"},
                        px: {md:"2rem" },
                        // mx:{xs:"5rem" },
                        color: "white",
                        position: "relative",
                    }}
                >
                    <Typography sx={{ fontSize:{md:"40px" , xs: "30px"}, fontWeight: 600, mb: 2 }}>
                        {t("Try for free today")}
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <Trans>
                            {t(
                                "Become part of a growing community of businesses optimizing their delivery operations. Start your free trial today and see how Mapit can transform your logistics!"
                            )}
                        </Trans>
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: "1rem", md: "0" },
                        alignItems: "center",
                        justifyContent: "center",
                        p: { xs: '1rem' }
                    }} >
                        <Button
                            sx={{
                                background: "#FFBA21",
                                color: "black",
                                fontSize: "12px",
                                textTransform: "none",
                                mr: "1rem",
                                px: "1rem",
                            }}
                        >
                            {t("Get a Demo for Free")}
                        </Button>
                        <Button
                            sx={{
                                color: "white",
                                textTransform: "none",
                                fontSize: "12px",
                            }}
                        >
                            {t("Explore Mapit")}
                        </Button>
                    </Box>
                </Box>
            </Box>

            <FooterContent LogoFooter={LogoFooter} AppStore={AppStore} PlayStore={PlayStore} />
        </>
    );
}