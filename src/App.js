// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Calculator from './components/Calculator/Calculator';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)
  // const mode = localStorage.getItem("mode");
  const Alertt = (message, type) => {
    setalert({
      msg: message,
      type: type
    }
    )
  }
  setTimeout(() => {
    setalert(null);
  }, 1600);
  const toggleMode = () => {
    // mode === 'light' ? setMode("dark") : setMode("light")

    if (mode === 'light') {
      setMode("dark")
      // localStorage.setItem("mode", "dark");
      document.body.style.backgroundColor = "#050742"
      Alertt("Dark Mode has been enabled", "success")
    }
    else {
      setMode("light")
      // localStorage.setItem("mode", "light");
      document.body.style.backgroundColor = "white"
      Alertt("Light Mode has been enabled", "success")
    }
    //some changes


  }
  return (
    <>
      <Router>

        <Navbar title="TextCase Master" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          
          <Route path="/" element={<TextForm mode={mode} Alertt={Alertt} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/calculator" element={<Calculator mode={mode} />} />
        </Routes >

      </Router >
    </>
  );
}

export default App;
