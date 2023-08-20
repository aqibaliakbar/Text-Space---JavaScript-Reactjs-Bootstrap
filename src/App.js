
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';





function App(props) {
  const [alert, setAlert] = useState(null) 
  const showAlert = (message, type)=> { 
    setAlert({ 
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  

  

  let [mode, setMyMode] = useState ("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode")
  let toggleMode =()=>{
    if (mode === 'light'){
      setMyMode('dark') 
      setBtnText("Enable Light Mode")
      document.body.style.backgroundColor = '#212529'
      showAlert ("Dark Mode Has Been Enable","success ")
    }   
    else {
      setMyMode ('light') 
      setBtnText("Enable Dark Mode")
      document.body.style.backgroundColor = 'white'
      
      showAlert ("Light Mode Has Been Enable", "success")
    }

  

  }
  return( 
 <>
        <Navbar title = "Text-Space" mode = {mode} toggleMode = {toggleMode} btnText = {btnText} category = "Home"/>
         <Alert alert = {alert}/>     
        <Routes>   
          <Route path="/" element={<TextForm heading="Try Text-Space - Space To Change Your Text." showAlert={showAlert} mode = {mode} />} />
          <Route path="/about" element={<About mode = {mode} category = "About" />} />
        </Routes>

 </>
  );
}

export default App;
