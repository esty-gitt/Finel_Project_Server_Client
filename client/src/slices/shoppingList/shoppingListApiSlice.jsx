
import apiSlice from "../api/apiSlice";
export const shoppingListApiSlice=apiSlice.injectEndpoints({

endpoints:(builder)=>({
    getShoppingList:builder.query({
        query:()=>'/shoppingList'

    }),
    getShoppingListById:builder.query({
        query:(_id)=>`/shoppingList/${_id}`
        
    }),
    addSoppingList:builder.mutation({
query:(shoppingList)=>({
    url:'/shoppingList',
    method:'POST',
body:shoppingList

})
    }),
    updateShoppingList:builder.mutation({
        query:(shoppingList)=>({
            url:'/shoppingList',
            method:'PUT',
            body:shoppingList
        })
    }),     
deleteShoppingList:builder.mutation({
        query:(_id)=>({
            url:`/shoppingList/${_id}`,
            method:'DELETE'
        })
    }),


})
})
export const {useGetShoppingListQuery,useGetShoppingListByIdQuery,useAddSoppingListMutation
    ,useUpdateShoppingListMutation,useDeleteShoppingListMutation}=shoppingListApiSlice