import { useState } from 'react';
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
  const [captchaError, setCaptchaError] = useState('');

  const validateMobileNumber = (num) => {
    return /^\d{10}$/.test(num);
  };

  const onChangeCaptcha = (value) => {
    if (value) {
      // reCAPTCHA completed successfully
      setCaptchaVerified(true);
      setCaptchaError('');
    } else {
      // reCAPTCHA not completed
      setCaptchaVerified(false);
      setCaptchaError('Please verify that you are not a robot.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      // Display captcha error message and prevent form submission
      setCaptchaError('Please verify that you are not a robot.');
      return;
    }

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

    if (Object.keys(newErrors).length > 0) {
      // Display errors if any
      alert('Please correct the form errors before submitting.');
      return;
    }

    try {
      await addDoc(collection(db, 'Messages'), {
        senderName: fullName,
        fullName,
        email,
        mobileNumber,
        subject,
        message
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

      // Display a success message as an alert
      alert('Form submitted successfully!');

    } catch (error) {
      console.error('Error sending form data to Firebase:', error);
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-contact__item">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-contact__item">
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="form-contact__item">
          <input
            type="text"
            placeholder="Email Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
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
        </div>
        <ReCAPTCHA
          sitekey="6LdpAQMoAAAAAPEcLIXSG1QvjHTbFaBdWSJoOCgl"
          onChange={onChangeCaptcha}
        />
        {captchaError && <span className="error-message">{captchaError}</span>}
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
