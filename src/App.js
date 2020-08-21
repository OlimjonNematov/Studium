import React, { useState } from "react";
import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import Title from "./components/Title";
import { styles } from "./assets/rootStyle";
function App() {
  //set up firebase------------------------------------------------------------------------------------
  var firebaseConfig = {
    apiKey: "AIzaSyDYlp-SHWM6nw63Zkum2A653jHLnlH6N3A",
    authDomain: "studium-f4f92.firebaseapp.com",
    databaseURL: "https://studium-f4f92.firebaseio.com",
    projectId: "studium-f4f92",
    storageBucket: "studium-f4f92.appspot.com",
    messagingSenderId: "704796394157",
    appId: "1:704796394157:web:6f68597ce6b6ad43ccfc24",
    measurementId: "G-PK0Q1HHS4E",
  };
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
