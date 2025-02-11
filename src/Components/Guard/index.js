
import { Navigate, Outlet } from "react-router-dom";

export default function Guard() {

    // if (localStorage.getItem("token") !=null) {
    //     return children
    //  }else {
    //     return <Navigate to='/auth/login'/>
    // }

const user = null

return user ? <Outlet/> :<Navigate to='/auth/login' />

//   return children;
}
