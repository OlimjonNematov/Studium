<<<<<<< HEAD
import React, { useState } from "react";
import "./App.css";
import firebase from "firebase/app";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import Title from "./components/Title";
import { styles } from "./assets/rootStyle";
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";

>>>>>>> master
function App() {
  //set up firebase------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------
  //decide wheather to show sign in or sign up
  const [showSignIn, setShowSignIn] = useState(true);

  return (
<<<<<<< HEAD
    <div className="App" style={styles}>
      <header className="App-header">
        <Title></Title>
        <button onClick={() => setShowSignIn(true)}>Sign In</button>
        <button onClick={() => setShowSignIn(false)}>Register</button>

        {showSignIn && <LogIn></LogIn>}
        {!showSignIn && <SignUp></SignUp>}
      </header>
=======
    <div className="App">
      <header className="App-header"></header>
>>>>>>> master
    </div>
  );
}

export default App;
