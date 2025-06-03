import apiSlice from "../api/apiSlice"
const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/product',
        }),
        getProductById: builder.query({
            query: (id) => `/product/${id}`,
        }),
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/product',
                method: 'POST',
                body: newProduct,
            }),
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...updatedProduct }) => ({
                url: `/product/${id}`,
                method: 'PUT',
                body: updatedProduct,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'DELETE',
            }),
        }),
    })
})
export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApiSlice
export default productApiSlice;