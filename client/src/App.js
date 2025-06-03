
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Loginn';
import Register from './components/Registerr';
import Home from './components/Home';
import ShoppingList from './components/shoppingList/ShoppingList';
import ListsNavigation from './components/shoppingList/ListsNavigation';
import SearchStore from './components/shoppingList/SearchStore';
import StoreResult from './components/shoppingList/StoreResult';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './components/landingPage';
import Logout from './components/LogOut';
import Users from './components/admin/Users';
import MenuSide from './components/shoppingList/MenuSide';
function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute allowedRoles={['admin','user']} />}> // בדיקה האם הלקוח מחובר תחת USER או ADMIN ללקוח שרוצה לגשת לדפים אלו
        <Route element={<Layout />}>//סוג זה של Layout מאפשר לנו להכניס את הניווט של הלקוח לכל הדפים שנמצאים תחתיו
        <Route path="home" element={<Home/>} />
        <Route path="menuSide" element={<MenuSide />} />
       <Route path="shoppinglist" element={<ShoppingList />} />
       <Route path ="listsNavigation" element={<ListsNavigation />} />
       <Route path ="searchStore" element={<SearchStore />} />
       <Route path="storeResult" element={<StoreResult />} />
       <Route path="landingPage" element={<LandingPage/>} />
        <Route path="logout" element={<Logout/>} /> 
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="users" element={<Users/>}/>
        </Route>
        </Route>
        </Route>
      <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
      </Routes>
      </Router>
    
     
  );
}

export default App;

