import React from 'react';
import '../Styles/App.css';
import Header from './Header';
import Samples from './Samples';
import About from './About'
import Contact from './Contact'
import Resume from '../Assets/Resume.pdf';



function scrollToHome(){
  // const samples = document.getElementById("home");
  // samples.scrollIntoView();
  document.getElementById("home").scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToSamples(){
  // const samples = document.getElementById("samples");
  // samples.scrollIntoView();
  document.getElementById("samples").scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToAbout(){
  // const samples = document.getElementById("about");
  // samples.scrollIntoView();
  document.getElementById("about").scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToAContact(){
  // const samples = document.getElementById("contact");
  // samples.scrollIntoView();
  document.getElementById("contact").scrollIntoView({ 
    behavior: 'smooth' 
  });
}


function App() {
  let main;
  let home;
  let mainBanner;
  let download;
  if (window.screen.width < 450) {
    console.log(window.screen.height);
     main = {
      height: 1370,
      color: 'red'
     }
     home = {
       zoom: '130%'
     }
     mainBanner = {
       top: 380
     }
     download = {
       marginTop: 140
     }
  } 


  return (
    <div id="home" style={home}>
      <div style={main} className="headerBackground">
        <Header
          scrollToHome={scrollToHome}
          scrollToSamples={scrollToSamples}
          scrollToAbout={scrollToAbout}
          scrollToAContact={scrollToAContact}
        />
        <div style={mainBanner} className="banner">
          <p className="name">EDWARD HARRIS</p>
          <p className="title">Web Developer</p>
        </div>
        
        <div style={download} className="downloadButton">
          {/* <a href="2.jpg" download="image.jpg"> */}
            <a href={Resume} download="resume.pdf">
            <p className="download">Download Resume</p>   
          </a>
        </div>

      </div>

      <p id="samples">
      </p>
      <Samples/>
      
      <p id="about"></p>
        <About/>
  
      <div id="contact">
        <Contact/>
        </div>
    </div>
  );
}

export default App;
