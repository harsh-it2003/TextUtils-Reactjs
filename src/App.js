import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import React, { useState } from 'react';
import Alert from './Components/Alert.js';
import About from './Components/About';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const setAlertNull = () => {
    setAlert(null)
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(setAlertNull, 1500);
  }

  const toggleFun = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("switched to light-mode", "success")
    }
    else {
      document.body.style.backgroundColor = '#062643';
      document.body.style.color = 'white';
      setMode('dark');
      showAlert("switched to dark-mode", "success")
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggle={toggleFun} />
      <Alert alert={alert} />

        <div className='my-3 container'>
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
            <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
