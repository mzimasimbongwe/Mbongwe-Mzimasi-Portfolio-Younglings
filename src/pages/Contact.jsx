import { useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDHpIVFf_gNoOjlrtbUP1Gv6HyV8HlW4vM",
  authDomain: "hosting-example-4d431.firebaseapp.com",
  databaseURL: "https://hosting-1ce05-default-rtdb.firebaseio.com",
  projectId: "hosting-1ce05",
  storageBucket: "hosting-1ce05.appspot.com",
  messagingSenderId: "279380074239",
  appId: "1:279380074239:web:5d989e8354399f887376ca"
};
const ContactSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    // Handle sending email or performing other actions here

    // Reset form fields after submission
    setFullName('');
    setEmail('');
    setMobileNumber('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="page-section contact" id="contact">
      <h2 className="page-section__title contact__title">
        Contact <span>Me!</span>
      </h2>
      <form className="contact__form form-contact" onSubmit={handleSendEmail}>
        <div className="form-contact__item">
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            value={fullName}
            onChange={handleFullNameChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-contact__item">
          <input
            type="tel"
            placeholder="Mobile Number"
            id="mobile"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          <input
            type="text"
            placeholder="Email Subject"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
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
          onChange={handleMessageChange}
        ></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
