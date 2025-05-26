import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
const Navbar= () => {
    const navigate = useNavigate();
    const items = [
        { label: 'ShoppingList', icon: 'pi pi-home', command: () => navigate('/layout/listsNavigation') },
        { label: 'Products', icon: 'pi pi-chart-line', command: () => navigate('/layout/products') },
        { label: 'Stores', icon: 'pi pi-list', command: () => navigate('/layout/stores') },
        { label: 'City', icon: 'pi pi-inbox', command: () => navigate('/layout/city') }
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