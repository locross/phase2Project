import React from 'react';
import Header from './components/header.js'
import Footer from './components/footer.js'
import DisplayWeather from './components/weatherOutput.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    <div className="App">
        <Header />
        <DisplayWeather />
        <Footer />
    </div>
  );
}

export default App;
