import { useDispatch } from "react-redux";
import "./App.css";
import Routes from "./routes";
import { useEffect } from "react";
import { setToken,} from "./redux/slice/tokenSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);
    
  
  return (<>
  
  <ToastContainer position="top-center" autoClose={3000} />
  <Routes/>
  </>
  );
}

export default App;
