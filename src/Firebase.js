import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBHbfeAGuJJEe_8J6rGb-OFepQv30oMy0c",
   authDomain: "ise-app-c03e2.firebaseapp.com",
   projectId: "ise-app-c03e2",
   storageBucket: "ise-app-c03e2.appspot.com",
   messagingSenderId: "541540856991",
   appId: "1:541540856991:web:2522660ac0c118ef111eaa",
   measurementId: "G-6RYYYBPNJ4"
 };
 
const app = initializeApp(firebaseConfig);



