import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar= () => {
    const navigate = useNavigate();
    const permission=useSelector((state) => state.user.userDetailes.permission); // Check if the user is logged in
    const items = [
        { label: 'Home', icon: 'pi pi-chart-line', command: () => navigate('/home') },
        { label: 'ShoppingList', icon: 'pi pi-home', command: () => navigate('/MenuSide') },
        { label: 'About As', icon: 'pi pi-list', command: () => navigate('/landingPage') },
        { label: 'Log Out', icon: 'pi pi-inbox', command: () => navigate('/logOut') },
        ...(permission =='admin'
            ? [{ label: 'Users', icon: 'pi pi-inbox', command: () => navigate('/users') }]
            : [])
    ];
    const handleTabChange = (e) => {
        items[e.index].command();
    }
    return(
          <div className="card">
            <TabMenu model={items} onTabChange={(e)=>{handleTabChange(e)}}/>
        </div>
    )
 }
export default Navbar;