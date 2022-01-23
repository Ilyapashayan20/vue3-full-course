
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDViBKV84kNrIBf65-kZyiX0gdTUb0wNl8",
  authDomain: "vue3-95a4a.firebaseapp.com",
  projectId: "vue3-95a4a",
  storageBucket: "vue3-95a4a.appspot.com",
  messagingSenderId: "851502565510",
  appId: "1:851502565510:web:c1ec00a0a77ec39791a907"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");



export default firebase;