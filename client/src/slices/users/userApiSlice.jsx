
import apiSlice from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({ 
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'user', // קריאת משתמשים
    }),
    getUserById: builder.query({
      query: (_id) => `user/${_id}`, // קריאת משתמש לפי ID
    }),
    addUser:builder.mutation({
      query:(newUser)=>({
        url:'user',
       method:'POST',
       body:newUser
     })}),
updateUser:builder.mutation({
query:(updateUser)=>({
  url:'user',
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
})
})
})


export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginMutation,
  useRegisterMutation,
} = userApiSlice;