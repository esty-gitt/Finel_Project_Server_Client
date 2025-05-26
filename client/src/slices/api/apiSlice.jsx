import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiSlice=createApi({
    reducerPath:'api',//שם הרדיוסר
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/api',
    credentials:'include',//מאפשר לשלוח קובצי עוגיות עם הבקשות</p>
    prepareHeaders:(headers,{getState})=>{
        const token=getState().user.token;
        console.log(token);
        if(token){
            headers.set('authorization',`Bearer ${token}`)//הוספת טוקן לבקשה
        }
        return headers;
    },}),//מוסיף להידרס הידר בכל בקשה 
    endpoints:(builder)=>({})
})
export default apiSlice;