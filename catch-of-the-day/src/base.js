import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp =  firebase.initializeApp({
  apiKey: "AIzaSyD-7Csx_c6RM4BZJFyOgD9kSBKwW2cLaU0",
  authDomain: "catch-of-the-day-amymoretti.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-amymoretti.firebaseio.com"
      
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

export default base;