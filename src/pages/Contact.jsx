import { useState, useEffect } from 'react';
// Import the functions you need from the SDKs you need
import {collection, addDoc} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore/lite";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/Contact.css';


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
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateMobileNumber = (num) => {
    return /^\d{10}$/.test(num);
  };

  useEffect(() => {
    if (successMessage) {
      // Display a success message as an alert
      alert(successMessage);

      // Clear the success message after displaying the alert
      setSuccessMessage('');
    }
  }, [successMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!email) {
      newErrors.email = 'Email is required.';
    }

    if (!validateMobileNumber(mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must have exactly 10 digits.';
    }

    if (!subject) {
      newErrors.subject = 'Subject is required.';
    }

    if (!message) {
      newErrors.message = 'Message is required.';
    }

    if (!captchaVerified) {
      newErrors.captcha = 'Please verify that you are not a robot.';
    }

    if (Object.keys(newErrors).length > 0) {
      // Set form errors and return to display them next to fields
      setFormErrors(newErrors);
      return;
    }

    try {
      await addDoc(collection(db, 'Messages'), {
        senderName: fullName,
        fullName,
        email,
        mobileNumber,
        subject,
        message,
      });

      const templateParams = {
        senderName: fullName,
        fullName,
        email,
        mobileNumber,
        subject,
        message,
      };

      await emailjs.send(
        'service_tydkb0q',
        'template_81gktl9',
        templateParams,
        '1PEgFnnoR3-tsdHvg'
      );

      setFullName('');
      setEmail('');
      setMobileNumber('');
      setSubject('');
      setMessage('');
      setCaptchaVerified(false);
      setFormErrors({});
      setSuccessMessage('Form submitted successfully!');

    } catch (error) {
      console.error('Error sending form data to Firebase:', error);
    }
  };

  return (
    <section className="page-section contact" id="contact">
      <h2 className="page-section__title contact__title">
        Contact <span>Me!</span>
      </h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form className="contact__form form-contact" onSubmit={handleSubmit}>
        <div className="form-contact__item">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {formErrors.fullName && (
            <span className="error-message">{formErrors.fullName}</span>
          )}
        </div>
        <div className="form-contact__item">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && (
            <span className="error-message">{formErrors.email}</span>
          )}
        </div>
        <div className="form-contact__item">
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          {formErrors.mobileNumber && (
            <span className="error-message">{formErrors.mobileNumber}</span>
          )}
        </div>
        <div className="form-contact__item">
          <input
            type="text"
            placeholder="Email Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {formErrors.subject && (
            <span className="error-message">{formErrors.subject}</span>
          )}
        </div>
        <div className="form-contact__item">
          <textarea
            name=""
            cols="30"
            rows="10"
            className="form-contact__textarea"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {formErrors.message && (
            <span className="error-message">{formErrors.message}</span>
          )}
        </div>
        <ReCAPTCHA
          sitekey="6LdpAQMoAAAAAPEcLIXSG1QvjHTbFaBdWSJoOCgl"
          onChange={(value) => setCaptchaVerified(!!value)}
        />
        {formErrors.captcha && (
          <span className="error-message">{formErrors.captcha}</span>
        )}
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;