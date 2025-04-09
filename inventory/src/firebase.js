// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1v6UPI4cMGfLKymmbyl0gDsVmrVPCkTE",
  authDomain: "imageprocess-bb374.firebaseapp.com",
  projectId: "imageprocess-bb374",
  storageBucket: "imageprocess-bb374.firebasestorage.app",
  messagingSenderId: "77186577678",
  appId: "1:77186577678:web:dc9af9df92ea797299935f"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("User session will persist even after closing the browser.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });
// Initialize Firebase
const storage = getStorage(app);

// Authentication setup
const provider = new GoogleAuthProvider();
export { storage, auth, provider };