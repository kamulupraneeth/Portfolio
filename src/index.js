import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
import { getDatabase,ref, set,push } from "firebase/database";
import { logEvent } from 'firebase/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyA8TLpW8kEt_FesmM9sUF1DMTd6JfxCYWI",
  authDomain: "my-portfolio-51999.firebaseapp.com",
  projectId: "my-portfolio-51999",
  storageBucket: "my-portfolio-51999.appspot.com",
  messagingSenderId: "178519596377",
  appId: "1:178519596377:web:6c8deb068d47a140a3c048",
  measurementId: "G-EY946PKL69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function saveFormData(name,email,phone,message,analytics){
    const dataRef = ref(database,'formData/');
    const newEntryRef = push(dataRef);
    set(newEntryRef,{
      name:name,
      email:email,
      phone:phone,
      message:message
    }).then(()=>{
      logEvent(analytics, 'form_submit', { name, email, phone, message });
      console.log('Data saved successfully!');
    }).catch((error)=>{
      console.error('Error saving data: ',error);
    })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);