
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Loginn';
import Register from './components/Registerr';
import Home from './components/Home';
import ShoppingList from './components/shoppingList/ShoppingList';
import ListsNavigation from './components/shoppingList/ListsNavigation';
function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/layout" element={<Layout />}>
        <Route index element={<Home/>} />
       <Route path="listsNavigation/shoppinglist/:id" element={<ShoppingList />} />
       <Route path ="listsNavigation" element={<ListsNavigation />} />
        </Route>
      </Routes>
      </Router>
    
     
  );
}

export default App;

