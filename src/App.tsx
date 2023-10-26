import './App.css';
import Login from './pages/Login'; 
import { Route, Routes } from 'react-router-dom';
 import { NotFound } from './pages/NotFound';
import Users from './pages/Users';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
 
const  App= ()=> {
  return (
    <div className="App">
    <ToastContainer position='bottom-right' hideProgressBar />
     <Routes >
     <Route path="/" element={<Login />} />  
     <Route path="/register" element={<Register />} />  
     <Route path="*" element={<NotFound />} />
     <Route
         path="users"
         element={<Users  />}
       />
     </Routes>
   </div>
  );
}

export default App;
