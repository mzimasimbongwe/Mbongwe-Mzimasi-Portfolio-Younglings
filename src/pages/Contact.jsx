import { useState } from 'react';
// Import the functions you need from the SDKs you need
import {collection, addDoc} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHpIVFf_gNoOjlrtbUP1Gv6HyV8HlW4vM",
  authDomain: "hosting-example-4d431.firebaseapp.com",
  databaseURL: "https://hosting-1ce05-default-rtdb.firebaseio.com",
  projectId: "hosting-1ce05",
  storageBucket: "hosting-1ce05.appspot.com",
  messagingSenderId: "279380074239",
  appId: "1:279380074239:web:5d989e8354399f887376ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const ContactSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


    // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  

  
    try {

      await addDoc(collection(db, 'Messages'), { 
        fullName,
        email,
        mobileNumber,
        subject,
        message
      })

      
     
      // Clear the form fields after successful submission
      setFullName('');
      setEmail('');
      setMobileNumber('');
      setSubject('');
      setMessage('');
    
      // Optionally, you can show a success message or redirect the user
      console.log("Form data sent to Firebase!");
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error sending form data to Firebase:", error);
    }
    
  };

  return (
    <section className="page-section contact" id="contact">
      <h2 className="page-section__title contact__title">
        Contact <span>Me!</span>
      </h2>
      <form className="contact__form form-contact" onSubmit={handleSubmit}>
        <div className="form-contact__item">
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}

          />
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         
          />
        </div>
        <div className="form-contact__item">
          <input
            type="tel"
            placeholder="Mobile Number"
            id="mobile"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email Subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <textarea
          name=""
          id="message"
          cols="30"
          rows="10"
          className="form-contact__textarea"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;





