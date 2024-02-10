import './App.css'
import Get_Started from './pages/get_started'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home_page';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Get_Started/>}/>
      <Route path="/home_page" element={<HomePage/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
