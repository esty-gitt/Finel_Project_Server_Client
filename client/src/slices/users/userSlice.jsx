import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
const userSlice = createSlice({
name: 'user',
initialState: {
token: localStorage.getItem("token") ||" " ,// פרטי המשתמש
isUserLiggedIn: localStorage.getItem("token")?true:false,  // אם המשתמש מחובר
userDetailes:localStorage.getItem("token")?jwtDecode(localStorage.getItem("token")):null // שם המשתמש
  },
  reducers: {
 setToken(state, action) { 
  const token = action.payload.token;
  console.log("tokenn:"+token); // הדפסת ה־token לקונסול
  state.token = token; // עדכון ה־token במצב
  state.isUserLiggedIn = true; // עדכון ה־isUserLoggedIn למצב מחובר
  state.userDetailes = jwtDecode(token); // עדכון פרטי המשתמש
  console.log("userDetailes:", state.userDetailes); // הדפסת פרטי המשתמש לקונסול
 localStorage.setItem('token', token); // שמירה ב־localStorage
},
removeToken(state)
{state.token = ""; // איפוס ה־token
  state.isUserLiggedIn = false; // עדכון ה־isUserLoggedIn למצב לא מחובר
  state.userDetailes = null; // איפוס פרטי המשתמש
localStorage.removeItem('token'); // הסרה מ־localStorage
  },
}
});

export const { setToken, removeToken } = userSlice.actions;//
export default userSlice.reducer;