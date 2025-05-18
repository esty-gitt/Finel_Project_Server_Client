import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout=()=>{

    return(
   <><div><Navbar/></div>
         <div>
             <h2>Welcome to Our Website</h2>
            <Outlet/>
        </div>
        </>
    )
}
export default Layout;