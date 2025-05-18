import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
name: 'user',
initialState: {
user: null,  // פרטי המשתמש
isAuthenticated: false,  // אם המשתמש מחובר
status: 'idle',  // סטטוס טעינה
error: null,  // שגיאות
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;  // עדכון פרטי המשתמש
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.user = null;  // לוג אאוט
      state.isAuthenticated = false;
    },
    setError: (state, action) => {
      state.error = action.payload;  // עדכון שגיאה
    },
  },
});

export const { setUser, logOut, setError } = userSlice.actions;
export default userSlice.reducer;