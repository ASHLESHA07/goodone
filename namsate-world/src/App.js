import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode  has  been enabled", " success");
      document.title = 'Hidden - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'Hidden app';
      // } ,2000);
      // setInterval(()=>{
      //   document.title = 'Hidden app install it';
      // } ,1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode  has  been enabled", " success");
      document.title = 'Hidden - Light Mode';
    }

  }
  return (
    <>
      {/* <Navbar title="Goa" hometext="HOME"/> */}
      {/* <Navbar /> */}
      {/* <About/> */}
      {/* <Router> */}
        <Navbar title="Goa" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 mt-5">
          <Textform heading ='Goa'/>
        </div>
        {/* <Router>
            <Routes>
              <Route exact path="/" element={<Textform />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Router>
      </Router> */}



    </>

  );
}
export default App;
