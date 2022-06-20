import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert"; 
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import React, { Component }  from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(1 39 48)";
      showAlert("Dark Mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enable", "success");
    }
  };
  return (
  
     <>
              <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/TextUtils/about" element={ <About mode={mode}/>}>
            </Route>
            <Route path="/TextUtils/"  element={ <Form
                showAlert={showAlert}
                heading="Enter the Text to analyze"
                mode={mode}
              />} >
            </Route>
          </Routes>
             
        </div>
     </>
  
     
    
  );
}

export default App;
