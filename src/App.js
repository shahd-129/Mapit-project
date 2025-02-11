import { useDispatch } from "react-redux";
import "./App.css";
import Routes from "./Routes";
import { useEffect } from "react";
import { setToken,} from "./Redux/Slices/tokenSlice";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);
    
  
  return (
   
    <Routes/>
  );
}

export default App;
