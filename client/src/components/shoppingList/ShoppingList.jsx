// import React, { useState, useEffect, useRef, use } from 'react';
// import { AutoComplete } from "primereact/autocomplete";
// import SearchStore from './SearchStore';
// import { classNames } from 'primereact/utils';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import LocationCity from '../LocationCity';
// import { Toast } from 'primereact/toast';
// import { Button } from 'primereact/button';
// import { Toolbar } from 'primereact/toolbar';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { IconField } from 'primereact/iconfield';
// import { InputIcon } from 'primereact/inputicon';
// import { RadioButton } from 'primereact/radiobutton';
// import { InputNumber } from 'primereact/inputnumber';
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
// import '../../css/shoppingListCss.css';
// import ListsNavigation from './ListsNavigation';
// import {useGetShoppingListQuery }from '../../slices/shoppingList/shoppingListApiSlice';
// import { set } from 'react-hook-form';
// import { useParams } from 'react-router-dom';
// import { useGetProductsQuery } from '../../slices/products/productsApiSlice';
// const ShoppingList = () => {
//     //new
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [filteredItems, setFilteredItems] = useState(null);
//    // const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));
//    const { data: itemss = [], isLoading, isError,isSuccess:issac } = useGetProductsQuery()
// const [items, setItems] = useState([]);
// useEffect(() => {
//     if(ii){
//         const formattedItems = itemss.map(item => ({
//             label: item.name,
//             value: item.name
//         }))
//         setItems(formattedItems);
//     }
// }, [itemss,issac]);
//     const searchItems = (event) => {
//         //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
//         let query = event.query;
//         let _filteredItems = [];

//         for(let i = 0; i < items.length; i++) {
//             let item = items[i];
//             if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
//                 _filteredItems.push(item);
//             }
//         }

//         setFilteredItems(_filteredItems);
//     }
//     //
//    const {id} = useParams();
//     let emptyProduct = {
//         id: null,
//         name: '',
//         image: null,
//         description: '',
//         category: null,
//         price: 0,
//         quantity: 0,
//         rating: 0,
//         inventoryStatus: 'INSTOCK'
//     };
//     const { data: lists, isSuccess } = useGetShoppingListQuery(undefined, {
//         selectFromResult: (result) => ({
//           data: result.data?.find(list => list._id === id),
//           isSuccess: result.isSuccess
//         })
//       });
      
//     const [products, setProducts] = useState(null);
//     const [productDialog, setProductDialog] = useState(false);
//     const [deleteProductDialog, setDeleteProductDialog] = useState(false);
//     const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
//     const [product, setProduct] = useState(emptyProduct);
//     const [selectedProducts, setSelectedProducts] = useState(null);
//     const [submitted, setSubmitted] = useState(false);
//     const [globalFilter, setGlobalFilter] = useState(null);
//     const toast = useRef(null);
//     const dt = useRef(null);
  
//     useEffect(() => {
//       if(lists ) {
//         setProducts(lists.productInList);

//       }
//       else {
//         setProducts([]);
//       }
//     }, [lists,isSuccess]);

  

//     const openNew = () => {
//         setProduct(emptyProduct);
//         setSubmitted(false);
//         setProductDialog(true);
//     };

//     const hideDialog = () => {
//         setSubmitted(false);
//         setProductDialog(false);
//     };

//     const hideDeleteProductDialog = () => {
//         setDeleteProductDialog(false);
//     };

//     const hideDeleteProductsDialog = () => {
//         setDeleteProductsDialog(false);
//     };

//     const saveProduct = () => {
//         setSubmitted(true);

//         if (product.name.trim()) {
//             let _products = [...products];
//             let _product = { ...product };

//             if (product.id) {
//                 const index = findIndexById(product.id);

//                 _products[index] = _product;
//                 toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
//             } else {
//                 _product.id = createId();
//                 _product.image = 'product-placeholder.svg';
//                 _products.push(_product);
//                 toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
//             }

//             setProducts(_products);
//             setProductDialog(false);
//             setProduct(emptyProduct);
//         }
//     };

//     const editProduct = (product) => {
//         setProduct({ ...product });
//         setProductDialog(true);
//     };

//     const confirmDeleteProduct = (product) => {
//         setProduct(product);
//         setDeleteProductDialog(true);
//     };

//     const deleteProduct = () => {
//         let _products = products.filter((val) => val.id !== product.id);

//         setProducts(_products);
//         setDeleteProductDialog(false);
//         setProduct(emptyProduct);
//         toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
//     };

//     const findIndexById = (id) => {
//         let index = -1;

//         for (let i = 0; i < products.length; i++) {
//             if (products[i].id === id) {
//                 index = i;
//                 break;
//             }
//         }

//         return index;
//     };


//     const createId = () => {
//         let id = '';
//         let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//         for (let i = 0; i < 5; i++) {
//             id += chars.charAt(Math.floor(Math.random() * chars.length));
//         }

//         return id;
//     };

//     const exportCSV = () => {
//         dt.current.exportCSV();
//     };

//     const confirmDeleteSelected = () => {
//         setDeleteProductsDialog(true);
//     };

//     const deleteSelectedProducts = () => {
//         let _products = products.filter((val) => !selectedProducts.includes(val));

//         setProducts(_products);
//         setDeleteProductsDialog(false);
//         setSelectedProducts(null);
//         toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
//     };

//     const onCategoryChange = (e) => {
//         let _product = { ...product };

//         _product['category'] = e.value;
//         setProduct(_product);
//     };

//     const onInputChange = (e, name) => {
//         const val = (e.target && e.target.value) || '';
//         let _product = { ...product };

//         _product[`${name}`] = val;

//         setProduct(_product);
//     };

//     const onInputNumberChange = (e, name) => {
//         const val = e.value || 0;
//         let _product = { ...product };

//         _product[`${name}`] = val;

//         setProduct(_product);
//     };

//     const leftToolbarTemplate = () => {
//         return (
//             <div className="flex flex-wrap gap-2">
//                 <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
//                 <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
              
//             </div>
//         );
//     };
//     const middelToolbarTemplate = () => {
//         return  <SearchStore products={products} />
//     };

//     const rightToolbarTemplate = () => {
//         return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
//     };

//     const imageBodyTemplate = (rowData) => {
//         return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
//     };

    
  


//     const actionBodyTemplate = (rowData) => {
//         return (
//             <React.Fragment>
//                 <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
//                 <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
//             </React.Fragment>
//         );
//     };

   

//     const header = (
//         <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
//             <h4 className="m-0">Manage Products</h4>
//             <IconField iconPosition="left">
//                 <InputIcon className="pi pi-search" />
//                 <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
//             </IconField>
//         </div>
//     );
//     const productDialogFooter = (
//         <React.Fragment>
//             <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
//             <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
//         </React.Fragment>
//     );
//     const deleteProductDialogFooter = (
//         <React.Fragment>
//             <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
//             <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
//         </React.Fragment>
//     );
//     const deleteProductsDialogFooter = (
//         <React.Fragment>
//             <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
//             <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
//         </React.Fragment>
//     );

//     return(<>
//      <div >
//         <div><LocationCity/></div>
//      <div>name
//             <Toast ref={toast} />
//             <div className="card" style={{ width: 'calc(100% )', marginLeft: 'auto' }}>
//     <Toolbar className="mb-4" start={leftToolbarTemplate} center={middelToolbarTemplate } end={rightToolbarTemplate}></Toolbar>

//     <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
//         dataKey="_id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
//         paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
//         currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}>
//         <Column selectionMode="multiple" exportable={false}></Column>
//         <Column field="product.barcode" header="Barcode" sortable style={{ minWidth: '12rem' }}></Column>
//         <Column field="product.name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
//         <Column field="image" header="Image" body={imageBodyTemplate}></Column>
//         <Column field="quantity" header="Quantity" sortable style={{ minWidth: '16rem' }}></Column>
//         <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
//     </DataTable>
// </div>
//             <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Add New Product" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
//                 {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="product-image block m-auto pb-3" />}
//                 <div className="field">
//                     <label htmlFor="name" className="font-bold">
//                         Name
//                     </label>
//                     <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems}
//             virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} />
//                     <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
//                     {submitted && !product.name && <small className="p-error">Name is required.</small>}
//                 </div>
                

                
//                 <div className="formgrid grid">
                  
//                     <div className="field col">
//                         <label htmlFor="quantity" className="font-bold">
//                             Quantity
//                         </label>
//                         <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
//                     </div>
//                 </div>
//             </Dialog>

//             <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
//                 <div className="confirmation-content">
//                     <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
//                     {product && (
//                         <span>
//                             Are you sure you want to delete <b>{product.name}</b>?
//                         </span>
//                     )}
//                 </div>
//             </Dialog>

//             <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
//                 <div className="confirmation-content">
//                     <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
//                     {product && <span>Are you sure you want to delete the selected products?</span>}
//                 </div>
//             </Dialog>
//         </div>
    
//         </div> </>)}
// export default ShoppingList;
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import '../../css/SearchStoreCss.css';
import SearchStore from './SearchStore';
import AddProduct from './AddProduct';
import { useSelector } from 'react-redux';
import { useUpdateShoppingListMutation} from '../../slices/shoppingList/shoppingListApiSlice';
const ShoppingList = ({ detailList, setDetailList, visibleAdd }) => {
    let emptyProduct = {
        _id: null,
        idProduct: "null",
        barcode: "",
        name: "",
        quantity: 0,
        img: "none"
    };
    const [products, setProducts] = useState(detailList?.productInList || []);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [onHide, setHide] = useState(false)
    const [edit, setEdit] = useState(null)
    const toast = useRef(null);
    const dt = useRef(null);
    const [deletedProduct, { data: updataedList, isSuccess: succesDeleteProduct }] = useUpdateShoppingListMutation()
    const userId = useSelector((state => state.user.userDetailes._id))
    useEffect(() => {
        console.log("detailList", detailList)
        console.log(detailList.productInList, "aaaaa")
        setProducts(
            detailList.productInList?.map((productInList1) => {
                return {
                    _id: productInList1._id,
                    idProduct: productInList1.product._id,
                    barcode: productInList1.product.barcode,
                    name: productInList1.product.name,
                    quantity: productInList1.quantity,
                    img: productInList1.product.img,
                }
            })
        )


    }, [detailList]);
    useEffect(() => {
        if (onHide) {
            hideDialog()

        }

    }, [onHide])
    useEffect(() => {
        if (succesDeleteProduct) {
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            setDetailList(updataedList)
        }

    }, [succesDeleteProduct])

    useEffect(() => {
        console.log("use")
        console.log(selectedProducts)
    }, [selectedProducts])
    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);

    };
    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
        setHide(false)
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };



    const editProduct = (product) => {
        const prod = { product: { _id: product.idProduct, name: product.name, barcode: product.barcode, img: product.img }, quantity: product.quantity, _id: product._id }
        setEdit(prod)
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = detailList.productInList.filter((val) => val._id !== product._id);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        try {
            deletedProduct({ _id: detailList._id, nameList: detailList.nameList, productInList: _products, userId })

        }
        catch (err) {
            console.log(err)
        }
    };





    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));
        console.log("aaaaaaaa", _products)
        let newProducts = _products.map((product) => {
            return {
                product: {
                    _id: product.idProduct
                },
                quantity: product.quantity
            }
        })
        try {
            deletedProduct({ _id: detailList._id, nameList: detailList.nameList, productInList: newProducts, userId })

        }
        catch (err) {
            console.log(err)
        }
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
    };



    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </div>
        );
    };
    const middelToolbarTemplate = () => {
        return <SearchStore products={detailList.productInList} />
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    const imageBodyTemplate = (rowData) => {
        //
        // return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };
    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">{!visibleAdd ? detailList.nameList : ""}</h4>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </IconField>
        </div>
    );

    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );
    return (
        <div className="   mb-3 md:mb-0" style={{ flex: 1 }}>
            <Toast ref={toast} />
            <div className="card ">
                <Toolbar className="mb-4" start={leftToolbarTemplate} center={middelToolbarTemplate} end={rightToolbarTemplate}></Toolbar>
                <DataTable ref={dt} value={!visibleAdd ?products:[]} selection={selectedProducts} onSelectionChange={(e) => {
                    setSelectedProducts(e.value)
                }}
                    dataKey="_id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}>
                    <Column selectionMode="multiple" exportable={false}></Column>
                    <Column field="barcode" header="Barcode" sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="quantity" header="Quantity" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="img" header="Image" body={imageBodyTemplate}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>



            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
            {productDialog ? <AddProduct setDetailList={setDetailList} detailList={detailList} setHide={setHide} edit={edit} setEdit={setEdit} /> : <></>}
        </div>
    )
}
export default ShoppingList;