import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const userApiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users', // קריאת משתמשים
    }),
    getUserById: builder.query({
      query: (_id) => `users/${_id}`, // קריאת משתמש לפי ID
    }),
    addUser:builder.mutation({
      query:(newUser)=>({
        url:'users',
       method:'POST',
       body:newUser
     })}),
updateUser:builder.mutation({
query:(updateUser)=>({
  url:'users',
  method:'PUT',
  body:updateUser
})
}),
deleteUser:builder.mutation({
  query:(_id)=>({
    url:`user${_id}`,
    method:'DELETE'
  })
}),
  
login:builder.mutation({
  query:(user)=>({
    url:'auth/login',
    method:'POST',
    body:user
  })
}),
register:builder.mutation({
  query:(user)=>({
    url:'auth/register',
    method:'POST',
    body:user
  })
}),
  }),
}); 
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginMutation,
  useRegisterMutation,
} = userApiSlice;