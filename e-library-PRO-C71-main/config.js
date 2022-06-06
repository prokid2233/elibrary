import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD3qniUA79ombwChMhVkjNP8Z17YN0jI6c",
  authDomain: "e-library-bcce1.firebaseapp.com",
  projectId: "e-library-bcce1",
  storageBucket: "e-library-bcce1.appspot.com",
  messagingSenderId: "598594930384",
  appId: "1:598594930384:web:ab1e72bfe7e495cb1d00d5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
