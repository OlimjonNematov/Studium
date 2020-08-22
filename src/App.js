import React, { useState } from "react";
import "./App.css";
import firebase from "firebase/app";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import Title from "./components/Title";
import { styles } from "./assets/rootStyle";
function App() {
  //set up firebase------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------
  //decide wheather to show sign in or sign up
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className="App" style={styles}>
      <header className="App-header">
        <Title></Title>
        <button onClick={() => setShowSignIn(true)}>Sign In</button>
        <button onClick={() => setShowSignIn(false)}>Register</button>

        {showSignIn && <LogIn></LogIn>}
        {!showSignIn && <SignUp></SignUp>}
      </header>
    </div>
  );
}

export default App;
