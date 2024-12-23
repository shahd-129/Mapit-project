import { createTheme } from "@mui/material"


const Theme = createTheme({

    palette: {
      primary: {
        main: "#014E81"
      },
      secondary: {
        main: "#FFBA21",
      },

    },
    typography: {
      fontFamily: 'IBM Plex Sans Arabic'
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily:  'IBM Plex Sans Arabic' 
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            fontFamily: 'IBM Plex Sans Arabic' 
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            fontFamily:  'IBMPlexSansArabic'
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: 'IBMPlexSansArabic'
          },
        },
      },
    },
    spacing: 1,
   
})    
  
  export default Theme