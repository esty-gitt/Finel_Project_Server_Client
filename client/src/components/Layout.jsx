import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import'../css/layoutCss.css'
const Layout=()=>{

    return(
   <><div className="navbar-fixed"><Navbar/></div>
         <div>
             <h2>Welcome to Our Website</h2>
            <Outlet/>
        </div>
        </>
    )
}
export default Layout;