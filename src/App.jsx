import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home'
import Navbar from './Compnent/Navbar';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
