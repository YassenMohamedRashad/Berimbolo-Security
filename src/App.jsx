import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Added curly braces for named imports
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App ()
{
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
