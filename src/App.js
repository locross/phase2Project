import React from 'react';
import Header from './components/header.js'
import Footer from './components/footer.js'
import DisplayWeather from './components/weatherOutput.js'
import About from './components/about.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route exact path="/" element={<DisplayWeather />} />
              <Route path="About" element={<About />} />
            </Routes>
          <Footer />  
        </BrowserRouter>    
      </div>  
  );
}

export default App;
