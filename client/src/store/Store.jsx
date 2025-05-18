import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/users/userSlice';
import { userApiSlice } from '../slices/users/userApiSlice';
//users: userReducer,
     
 const store = configureStore({
    reducer: {
      // reducers רגילים
    // 
  
      // reducers של RTK Query (API)
      [userApiSlice.reducerPath]: userApiSlice.reducer,
     
    },
    middleware: (getDefaultMiddleware) =>//זו פונקציה ש־Redux Toolkit מספק, והיא מחזירה לך מערך של middlewareים ברירת מחדל מוכנים.
      getDefaultMiddleware()//
        .concat(userApiSlice.middleware)//פה את מוסיפה את ה־middleware של RTK Query, שזה החלק שמנהל:

       
       
       
  });
  export default store;