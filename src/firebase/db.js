
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCx5NIxP5uB8kJo-VbbXltMW2EUi0noWt8",
    authDomain: "chat-api-fae81.firebaseapp.com",
    projectId: "chat-api-fae81",
    storageBucket: "chat-api-fae81.appspot.com",
    messagingSenderId: "949802111921",
    appId: "1:949802111921:web:0d85328e80ceaea143e390",
};
export const init = initializeApp(firebaseConfig);
export const db = getFirestore(init);

