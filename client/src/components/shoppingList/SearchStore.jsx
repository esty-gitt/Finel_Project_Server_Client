import React, { use, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useGetCitiesQuery } from "../../slices/cities/cityApiSlice";
import { Dropdown } from 'primereact/dropdown';
import { useEffect } from "react";
import { useLazyGetListStoreByTotalPriceQuery } from "../../slices/store/storeApiSlice";
import StoreResult from "./StoreResult";
import'../../css/SearchStoreCss.css';
import { useNavigate } from "react-router-dom";

const SearchStore = ({products}) => {
    const navigate = useNavigate();
    const [getListStoreByTotalPrice, { data, isLoading:ii, isError:ee }] =useLazyGetListStoreByTotalPriceQuery();
    const { data: citiess = [], isLoading, isError,isSuccess } = useGetCitiesQuery();
    const [selectedCity, setSelectedCity] = useState(null);
    const handleOkClick = () => {
        setVisible(false)
        if(selectedCity&&products.length>0){

console.log("selectedCity", selectedCity)
            
        
getListStoreByTotalPrice({ cityId: selectedCity.code, products: products }).then((response) => {
    if(!response.data || response.data.length === 0) {
        alert("No stores found for the selected city and products.try another city or products");
        return;
    }
    navigate('/storeResult', { state: { resultData: response.data } });

  });
        }
    }
    const cities=citiess.map(city => {
        return { name: city.name, code: city.name };
    })

    const [visible, setVisible] = useState(false);
    

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
           
            <span className="font-bold white-space-nowrap">Amy Elsner</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={()=>handleOkClick()} autoFocus />
        </div>
    );

    return(<>
     <div className="card1 flex justify-content-center">
    
         <Button  label="Finding the Cheapest Basket " icon="pi pi-search" rounded severity="success" aria-label="Search"onClick={() => setVisible(true)} />
         <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={() => {if (!visible) return; setVisible(false); }}>
         <div className="card flex justify-content-center">
         <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
         placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div></>)
}
export default SearchStore;