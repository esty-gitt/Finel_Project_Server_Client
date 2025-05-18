
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Loginn';
import Register from './components/Registerr';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/layout" element={<Layout />}>
        <Route index element={<Home/>} />

        </Route>
      </Routes>
      </Router>
    
     
  );
}

export default App;

