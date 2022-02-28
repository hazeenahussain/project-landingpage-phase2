import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Main from './components/main/Main';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Login from './components/login/Login';
import Speakers from './components/speakers/Speakers';
import Venue from './components/venue/Venue';
import Sponsors from './components/sponsors/Sponsors';
import Footer from './components/footer/Footer';
// import React, { useState } from 'react';


function App() {

  // ..................................................................................
//   var [loggedin, setloggedin] = useState(0)
//   var [loggedout, setloggedout] = useState(0)
//   console.log("lin",loggedin)
//   console.log("lout",loggedout)
//   const setlogin = (l) => {
//     setloggedin(l)
//   }
//   const setlogout = (l) => {
//     setloggedout(l)
//  //   setloggedin(l)
//   }
//   if(loggedin===0)




  // ...................................................................................

  // ...................................................................................
  return (
  
  <Router>
  <Navigation/>
  <Main/>
  
  <Routes>
  <Route path="About" element={<About/>}/>
  <Route path="Gallery" element={<Gallery/>}/>
  <Route path="Login" element={<Login />}/>
  <Route path="Speakers" element={<Speakers/>}/>
  <Route path="Venue" element={<Venue/>}/>
  <Route path="Sponsors" element={<Sponsors/>}/>
       </Routes>
       <Footer/>

  </Router>
  );
}

export default App;
