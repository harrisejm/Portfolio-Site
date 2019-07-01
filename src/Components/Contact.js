import React from 'react';
import '../Styles/Contact.css';
import email from '../Assets/img/email.png';
import linkedIn from '../Assets/img/LinkedIn.png';
import github from '../Assets/img/Github2.png';
import { relative } from 'path';
import { NONAME } from 'dns';

let contactMain;
let contactTitle;
let linksContact;
let quote;
if (window.screen.width < 450) {
  contactMain = {
    height: 1250
  }
  contactTitle = {
    position: relative,
    top: 250,
    fontWeight: 'bold'
  }
  linksContact = {
    marginTop: 400
  }
  quote = {
    display: 'none'
  }
} 

function Contact(){
  return(
    <div style={contactMain} className="contactMain">
      <div style={contactTitle} className="contactTitle">
        <p>CONTACT</p>
      </div>
    <div style={linksContact} className="linksContact">
      <a href="mailto:harrisejm@gmail.com">
        <div className="email">
        <img src={email} alt="email" className="emailImg"/>  
        </div>
      </a>
      <a href="https://www.linkedin.com/in/edward-harris" target="_blank" rel="noopener noreferrer">
        <div className="linkedIn">
          <img src={linkedIn} alt="linkedIn" className="linkedInImg"/>  
        </div>
      </a>
      <a href="https://github.com/harrisejm" target="_blank" rel="noopener noreferrer">
        <div className="github">
          <img src={github} alt="github" className="githubImg"/>  
        </div>
      </a>
      <div className="copywrite">
        © 2019 by Edward Harris
      </div>
    </div>
      <div style={quote} className="quote">
       The world stops for nothing, time catches us all
      </div>
    </div>
  )
}

export default Contact;