import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
name: 'user',
initialState: {
token:localStorage.getItem("token") ||" " ,// פרטי המשתמש
isUserLiggedIn: localStorage.getItem("token")?true:false,  // אם המשתמש מחובר
userName: "",  // שם המשתמש
  },
  reducers: {
 setToken(state, action) { 
  const token = action.payload.token;
  console.log("tokenn:"+token); // הדפסת ה־token לקונסול
  state.token = token; // עדכון ה־token במצב
  state.isUserLiggedIn = true; // עדכון ה־isUserLoggedIn למצב מחובר
 localStorage.setItem('token', token); // שמירה ב־localStorage
},
removeToken(state)
{state.token = ""; // איפוס ה־token
  state.isUserLiggedIn = false; // עדכון ה־isUserLoggedIn למצב לא מחובר
localStorage.removeItem('token'); // הסרה מ־localStorage
  },
}
});

export const { setToken, removeToken } = userSlice.actions;//
export default userSlice.reducer;