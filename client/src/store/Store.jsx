import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/users/userSlice'; // ייבוא הרדוסר של המשתמש
import apiSlice from '../slices/api/apiSlice';
//users: userReducer,
     
 const store = configureStore({
    reducer: {
      // reducers רגילים
    // 
  
      // reducers של RTK Query (API)
    [apiSlice.reducerPath]: apiSlice.reducer,
    user:userReducer
    },
    middleware: (getDefaultMiddleware) =>//זו פונקציה ש־Redux Toolkit מספק, והיא מחזירה לך מערך של middlewareים ברירת מחדל מוכנים.
      getDefaultMiddleware()//
.concat(apiSlice.middleware), // הוספת ה־middleware של RTK Query
       
  });
  export default store;