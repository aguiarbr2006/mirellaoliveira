// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDwH3VhiWpzYRas-QXzVxNuA0-_wW7g5sE",
//   authDomain: "rayssaoliveira-b9c86.firebaseapp.com",
//   projectId: "rayssaoliveira-b9c86",
//   storageBucket: "rayssaoliveira-b9c86.firebasestorage.app",
//   messagingSenderId: "983397980222",
//   appId: "1:983397980222:web:75c6765109f537c0d7196f",
//   measurementId: "G-XBX5ZNPTFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Preencha com as credenciais do seu projeto Firebase.
// Firebase Console > Project settings > General > Your apps > Web app.
 window.RAYSSA_FIREBASE_CONFIG = {
   apiKey: "AIzaSyDwH3VhiWpzYRas-QXzVxNuA0-_wW7g5sE",
   authDomain: "rayssaoliveira-b9c86.firebaseapp.com",
   projectId: "rayssaoliveira-b9c86",
   storageBucket: "rayssaoliveira-b9c86.firebasestorage.app",
   messagingSenderId: "983397980222",
   appId: "1:983397980222:web:75c6765109f537c0d7196f",
   measurementId: "G-XBX5ZNPTFZ"
 };

// Documento usado para sincronizar celular, notebook e demais aparelhos.
 window.RAYSSA_FIREBASE_DOC_PATH = "sistemas/rayssa-oliveira";
