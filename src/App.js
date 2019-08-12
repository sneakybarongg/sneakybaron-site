import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'



import CustomNavbar from './components/CustomNavbar';
import CustomMastHead from './components/CustomMastHead';
import Tournaments from './components/Tournaments';
import Contact from './components/Contact';
import Products from './components/Products'

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar/>
        <CustomMastHead/>
        <Tournaments/>
        <Products/>
        <Contact/>
      </div>
    </Router>
  )
}

export default App;
