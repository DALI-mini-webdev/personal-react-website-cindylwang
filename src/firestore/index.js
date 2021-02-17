import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCKIQfdT2Q64zbsfHVrAu1mZgVnLTkQjVQ",
    authDomain: "personal-website-cindylwang.firebaseapp.com",
    projectId: "personal-website-cindylwang",
    storageBucket: "personal-website-cindylwang.appspot.com",
    messagingSenderId: "571124312808",
    appId: "1:571124312808:web:2b441f70b2c6ede31ef75d",
    measurementId: "G-8PT6LE8BFD"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  export default{
      firebase, db
  }