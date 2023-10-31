import React from 'react'
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode= ()=>{
    if(mode  ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success")
      document.title='TextUtils - DarkMode'
      // setInterval(()=>{
      //   document.title='TextUtils is amazing'
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils now'
      // },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title='TextUtils - LightMode'
    }
  }

  return (
    <>
    {/* <Router> */}
      

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>
      {/* <div className="container my-3"> */}
{/*                
          <Routes>
            <Route path="/about" element={<About/>} >

            </Route>

            <Route path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

            </Route>
          </Routes> */}


      {/* </div> */}


      {/* </Router> */}

    </>
      );
}

export default App;