
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/js/bootstrap.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/common/Navbar'
import RegisterPage from './components/auth/RegisterPage'
import LoginPage from './components/auth/LoginPage'
import ChatsPage from './components/chat/ChatsPage'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ChatsPage />}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
