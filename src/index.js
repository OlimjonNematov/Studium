import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
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
firebase.initializeApp(firebaseConfig);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
