import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import About from "./components/About";
import { useState } from "react";
import NoteState from "./Context/NoteState";



function App() {

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      // setcode(`navbar navbar-expand-lg navbar-dark bg-dark`)
      setcode({
        class: `navbar navbar-expand-lg navbar-dark bg-dark`,
        msg: `Enable light mode`,
        txt: `text-white`,
        btn: `btn-dark`,
        box: `form-control bg-dark text-white border border-dark `,
        hr: `text-light`,
      });
      document.body.style.backgroundColor = "rgb(16 16 18)";
      
    } else {
      setmode("light");
      setcode({
        class: `navbar navbar-expand-lg navbar-light`,
        style: `#e3f2fd`,
        msg: `Enable dark mode`,
        btn: `btn-primary`,
        box: `form-control `,
        hr: `text-dark`,
      });
      document.body.style.backgroundColor = "#ffff";
      
    }
  };

  const [code, setcode] = useState({
    class: `navbar navbar-expand-lg navbar-light`,
    style: `#e3f2fd`,
    msg: `Enable dark mode`,
    btn: `btn-primary`,
    box: `form-control `,
    hr: `text-dark`,
  });
  const [mode, setmode] = useState("light");


  
  return (
    <>
   <NoteState>
  <BrowserRouter>
        <Navbar
          title="REACT-1"
          head1="HOME"
          head2="ABOUT"
          toggle={toggle}
          code={code}
        />
    <Routes>
      <Route path="/" element={<Text code={code} />} />
      <Route path="About" element={<About />} />
      
    </Routes>
  </BrowserRouter>
  </NoteState>
 
    </>
  );
}

export default App;
