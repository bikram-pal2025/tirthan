import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home'
import Navbar from './Compnent/Navbar';
import MySelf from './Compnent/MySelf';
import Footer from './Compnent/Footer';
import TempleDeteils from './Pages/TempleDeteils';

const App = () => {
  const [popup, setPopup] = useState(true)
  return (
    <div>
      {
        popup  && <MySelf setPopup={setPopup}/>
      }
      <Router>
    
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/temple/:id'  element={<TempleDeteils/>}/>
        </Routes>
      </Router>

      <Footer/>

    </div>
  )
}

export default App
