import React, { useRef ,useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Sidebar } from 'primereact/sidebar';
import {useGetShoppingListQuery } from '../../slices/shoppingList/shoppingListApiSlice';
import ShoppingList from './ShoppingList';
const ListsNavigation = () => {
    const toast = useRef(null);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
const { data: lists= [], isLoading, isError }= useGetShoppingListQuery();
  
const items = [
    {
        label: 'Documents',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                command:()=>{
                    alert("new")
                }
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                 command:()=>{
                    alert("new")
                }
            }
        ]
    },
    {
        label: 'My Lists',
        items:lists.map(order => ({
            label: order.nameList,
            command: () => navigate(`/shoppinglist`, {state:{id:order._id}}) 
        }))
    }
];

    
        
    

    return (
       <> <Sidebar  visible={visible} showCloseIcon={false} modal={false} dismissable={false} position="right" style={{ width: '300px' }}>
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
        </Sidebar>
        <div>
            {/* {<ShoppingList/> } */}
        </div>
        </>
    );
};

export default ListsNavigation;