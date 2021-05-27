import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAdK554Sjn93pFEuZfBye8SYZvhkjl0_bY",
  authDomain: "ecomm-react-77f43.firebaseapp.com",
  projectId: "ecomm-react-77f43",
  storageBucket: "ecomm-react-77f43.appspot.com",
  messagingSenderId: "910261993916",
  appId: "1:910261993916:web:2f5029a8c23cbb3ed66bb9",
  measurementId: "G-VZPTF9TE27",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
