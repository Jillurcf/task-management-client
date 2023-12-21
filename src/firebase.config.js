// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz-9LtAACjyyZBfDxUXNofrUgexbMqwvU",
  authDomain: "task-management-platform-a444f.firebaseapp.com",
  projectId: "task-management-platform-a444f",
  storageBucket: "task-management-platform-a444f.appspot.com",
  messagingSenderId: "634383336879",
  appId: "1:634383336879:web:93bb02e8cd3c6784f59b5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;