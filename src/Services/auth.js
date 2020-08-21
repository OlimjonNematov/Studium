import firebase from "firebase/app";
import auth from "firebase/auth";
import firestore from "firebase/firestore";

//sign up
export function signUp(username, password) {
  firebase.auth().createUserWithEmailAndPassword(username, password);
}
// sing in
export function signIn(username, password) {
  firebase.auth().signInWithEmailAndPassword(username, password);
}
