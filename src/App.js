import { CssBaseline,  ThemeProvider } from "@mui/material";
import "./App.css";
import Theme from "./Theme";
import {
  Supporting,
  Features,
  About,
  Solutions,
  Navbar,
  Home,
  FAQs,
  Footer,
} from "./Components";

// import Login from "./Components/Login";
// import {  Route, Routes } from "react-router-dom";

function App() {
 
 

 
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />   
        <Navbar />
        <Home />
        <Solutions /> 
          <About />
        <Features />
         <Supporting />
         <FAQs />
        <Footer />
      </ThemeProvider>

    </>
  );
}

export default App;
