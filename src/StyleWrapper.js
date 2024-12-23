import "./i18n";
import React, { useLayoutEffect, useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from 'stylis';
import { createTheme } from '@mui/material/styles'
import { arEG } from '@mui/material/locale';
import { enUS } from '@mui/material/locale';
import { useSelector } from "react-redux";
import moment from "moment"; 
import 'moment/locale/ar'; 

const StyleWrapper = (props) => {
    const { language } = useSelector(state => state?.lang)

    const direction = useMemo(() => (!language || language === "en") ? "ltr" : "rtl", [language])

    const theme = useMemo(_ => {
        moment.locale(language === "ar" ? "ar" : "en");
        return createTheme(  {direction}, direction === "rtl" ? arEG : enUS);
    }, [language, direction])

    const cacheLtr = createCache({
        key: "muiltr"
    });

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin]
    });

    useLayoutEffect(() => {
        document.body.setAttribute("dir", direction);
    }, [direction]);

    return (
        <CacheProvider value={direction === "ltr" ? cacheLtr : cacheRtl}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </CacheProvider>
    );
};

export default StyleWrapper;