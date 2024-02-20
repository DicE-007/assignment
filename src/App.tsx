import './App.css'
import Get_Started from './pages/get_started'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home_page';
import { FavUserProvider } from './contextapi/contextapi';
import LikedImagePage from './pages/liked_image_page';
function App() {

  return (
    <>
      <FavUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Get_Started />} />
            <Route path="/home_page" element={<HomePage />} />
            <Route path='/liked_image_page' element={<LikedImagePage />} />
          </Routes>
        </BrowserRouter>
      </FavUserProvider>
    </>
  )
}

export default App
