import './App.css'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Analytics from './pages/data'
import Settings from './pages/Settings'
import ViewTask from './pages/Task'
import "react-toastify/dist/ReactToastify.css";


function App() {

 return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/board" element={<Home/>} /> 
          <Route path="/analytics" element={<Analytics/>} /> 
          <Route path="/settings" element={<Settings/>} /> 
          <Route path="/viewtask/:id" element={<ViewTask/>} /> 
          <Route path="*" element={<NotFound/>} /> 
        </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
