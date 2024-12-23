import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
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

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { overflowX: 'hidden' } }} />
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
