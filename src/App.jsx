
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Staffing from './pages/Staffing'
import DdaServices from './pages/DdaServices'



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/staffing' element={<Staffing />} />
        <Route path='/dda-services' element={<DdaServices />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
