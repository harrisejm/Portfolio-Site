import React from 'react';
import '../Styles/About.css';

let story;
let main;
let skills;
let skillsCat;
let aboutTitle;
let skillsFrontEnd;
let skillsBackEnd;
let skillsFrame;
let skillsOther;
if (window.screen.width < 450) {
  story = {fontSize: 28}
  main = {height: 1950}
  skills = {fontSize: 40}
  skillsCat = {fontSize: 28}
  aboutTitle = {fontWeight: 'bold'}
  skillsFrontEnd = {height: 30, width:210}
  skillsBackEnd = {height:30, width: 210}
  skillsFrame = {height:30, width:350}
  skillsOther = {height:30, width: 160}
} 

function About(){
  return(
    <div style={main} className="aboutMain">
      <div style={aboutTitle} className="aboutTitle">
        <p>ABOUT</p>
      </div>
      <div className="one">
        <p style={skills} className="skills">Technologies/Languages</p>

        <div style={skillsCat} className="skillsCat">
          <div style={skillsFrontEnd} className="skillsFrontEnd"><p>Front End</p></div>
          <div className="skillsCatList"><p>HTML, CSS, SASS, JavaScript, TypeScript</p></div>   
        </div>

        <div style={skillsCat} className="skillsCat">
          <div style={skillsBackEnd} className="skillsBackEnd"><p>Back End</p></div>
          <div className="skillsCatList"><p>C#, ASP.NET, MySQL</p></div>
        </div>
        <div style={skillsCat} className="skillsCat">
          <div style={skillsFrame} className="skillsFrame"><p>Frameworks/libraries:</p></div>
          <div className="skillsCatList"><p>React, Angular, JQuery, Bootstrap</p></div>
        </div>
        <div style={skillsCat} className="skillsCat">
          <div style={skillsOther} className="skillsOther"><p>Other</p></div>
          <div className="skillsCatList"><p>Karma, Jasime, MSTest, Unit Testing, Webpack, firebase, Gulp and Git</p></div>
        </div>
      </div>

          <div className="one">
        <p style={skills} className="skills">My Journey</p>
        <p style={story} className="story">I am a full-stack developer who transitioned into web and software development after 5+ years in the legal field. Experience with Frontend and Backend development; technical skills include HTML, CSS, Javascript, React, Angular, C#, MySQL and more. I demonstrate strong attention-to-detail, end-to-end project management skills and ability to effectively self-manage during independent projects. I started learning coding in 2017 and after finding that I really enjoy creating products from the ground up, I made the transition into development full time and have since completed a 6-month coding bootcamp and a web dev internship with Off The Record, a legal-tech mobile app startup.</p>
        </div>

    </div>
  )
}

export default About;