import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm title="TextUtils - Home" heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
          {/* <Routes>
            <Route exact path="/" element={<TextForm title="TextUtils - Home" heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" showAlert={showAlert} mode={mode} />} />
            <Route exact path="/about" element={<About title="TextUtils - About" mode={mode} />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
