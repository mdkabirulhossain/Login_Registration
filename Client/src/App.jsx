import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './signup';
import Login from './login';

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
