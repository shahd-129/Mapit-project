import "./App.css";
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
      
        <Navbar />
        <Home />
        <Solutions /> 
          <About />
        <Features />
         <Supporting />
         <FAQs />
        <Footer />
     

    </>
  );
}

export default App;
