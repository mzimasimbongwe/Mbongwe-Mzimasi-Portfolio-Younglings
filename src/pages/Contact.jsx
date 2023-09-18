import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, addDoc } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/Contact.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      captchaVerified: false,
      nameError: '',
      emailError: '',
      subjectError: '',
      messageError: '',
    };

    // Your Firebase configuration
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


    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    this.db = getFirestore(app);
  }

  validateName = () => {
    if (this.state.name.trim() === '') {
      this.setState({ nameError: 'Name is required' });
      return false;
    }
    this.setState({ nameError: '' });
    return true;
  };

  validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.state.email)) {
      this.setState({ emailError: 'Invalid email address' });
      return false;
    }
    this.setState({ emailError: '' });
    return true;
  };

  validateSubject = () => {
    if (this.state.subject.trim() === '') {
      this.setState({ subjectError: 'Subject is required' });
      return false;
    }
    this.setState({ subjectError: '' });
    return true;
  };

  validateMessage = () => {
    if (this.state.message.trim() === '') {
      this.setState({ messageError: 'Message is required' });
      return false;
    }
    this.setState({ messageError: '' });
    return true;
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = this.validateName();
    const isEmailValid = this.validateEmail();
    const isSubjectValid = this.validateSubject();
    const isMessageValid = this.validateMessage();

    if (!this.state.captchaVerified) {
      alert('Please verify that you are not a robot.');
      return;
    }

    if (!(isNameValid && isEmailValid && isSubjectValid && isMessageValid)) {
      return;
    }

    try {
      await addDoc(collection(this.db, 'Messages'), {
        senderName: this.state.name,
        fullName: this.state.name,
        email: this.state.email,
        mobileNumber: '',
        subject: this.state.subject,
        message: this.state.message,
      });

      const templateParams = {
        senderName: this.state.name,
        fullName: this.state.name,
        email: this.state.email,
        mobileNumber: '',
        subject: this.state.subject,
        message: this.state.message,
      };

      await emailjs.send(
        'service_tydkb0q',
        'template_81gktl9',
        templateParams,
        '1PEgFnnoR3-tsdHvg'
      );

      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
        captchaVerified: false,
      });

      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  render() {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <div className="heading text-center">
            <h2>
              Contact <span> Me </span>
            </h2>
            <br></br> <br></br> <br></br> <br></br> <br></br>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                <h3>Get in Touch</h3>
                </div>
              <div className="content">
                <div className="info">
                  <i className="fas fa-mobile-alt"></i>
                  <h4 className="d-inline-block">
                    PHONE :
                    <br />
                    <span>0718117814</span>
                  </h4>
                </div>
                <div className="info">
                  <i className="far fa-envelope"></i>
                  <h4 className="d-inline-block">
                    EMAIL :
                    <br />
                    <span>mzimasimbongwe98@gmail.com</span>
                  </h4>
                </div>
                <div className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4 className="d-inline-block">
                    ADDRESS :<br />
                    <span>Cape Town , Western Cape, South Africa</span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className={`form-control ${this.state.nameError && 'is-invalid'}`}
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <div className="invalid-feedback">{this.state.nameError}</div>
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className={`form-control ${this.state.emailError && 'is-invalid'}`}
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    <div className="invalid-feedback">{this.state.emailError}</div>
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className={`form-control ${this.state.subjectError && 'is-invalid'}`}
                      placeholder="Subject"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleInputChange}
                    />
                    <div className="invalid-feedback">{this.state.subjectError}</div>
                  </div>
                  <div className="col-sm-12">
                    <textarea
                      className={`form-control ${this.state.messageError && 'is-invalid'}`}
                      rows="5"
                      id="comment"
                      placeholder="Message"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                    ></textarea>
                    <div className="invalid-feedback">{this.state.messageError}</div>
                  </div>
                  <div className="col-sm-12">
                    <ReCAPTCHA
                      sitekey="6LdpAQMoAAAAAPEcLIXSG1QvjHTbFaBdWSJoOCgl"
                      onChange={(value) => this.setState({ captchaVerified: !!value })}
                    />
                  </div>
                  <div className="col-sm-12">
                    <button className="btn btn-block" type="submit">
                      Send Now!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
