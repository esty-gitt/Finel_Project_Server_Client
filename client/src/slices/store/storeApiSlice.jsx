import apiSlice from "../api/apiSlice"
const storeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStores: builder.query({
        query: () => '/store',
        }),
        getStoreById: builder.query({
        query: (id) => `/store/${id}`,
        }),
        addStore: builder.mutation({
        query: (newStore) => ({
            url: '/store',
            method: 'POST',
            body: newStore,
        }),
        }),
        updateStore: builder.mutation({
        query: ({ id, ...updatedStore }) => ({
            url: `/store/${id}`,
            method: 'PUT',
            body: updatedStore,
        }),
        }),
        deleteStore: builder.mutation({
        query: (id) => ({
            url: `/store/${id}`,
            method: 'DELETE',
        }),
        }),
        getListStoreByTotalPrice: builder.query({
            query: ({ cityId, products }) => {
                const encodedProducts = encodeURIComponent(JSON.stringify(products));
                return {
                    url: `/store/ListStoreByPrice?cityId=${cityId}&products=${encodedProducts}`,
                    method: 'GET',
                };
            }
        })
    })
})
export const {
    useGetStoresQuery,
    useGetStoreByIdQuery,
    useAddStoreMutation,
    useUpdateStoreMutation,
    useDeleteStoreMutation,
    useLazyGetListStoreByTotalPriceQuery,
    useGetListStoreByTotalPriceQuery} = storeApiSlice
export default storeApiSlice;