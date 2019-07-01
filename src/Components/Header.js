import React from 'react';
import '../Styles/Header.css';

let mainHeader;
let navbar;
if (window.screen.width < 450) {
  // mainHeader = {
  //   fontSize: 20,
  //   height: 75,
  //   paddingTop: 10
  // }
  // navbar = {
  //   paddingBottom: 80
  // }
}

function Header(props){
  return(
    <div style={mainHeader} className="mainHeader">
      <div className="navbar">
        <div style={navbar}>
          <p onClick={()=>props.scrollToHome()}>HOME</p>
        </div>
        <div style={navbar}>
          <p onClick={()=>props.scrollToSamples()}>PORTFOLIO</p>
        </div>
        <div>
          <p onClick={()=>props.scrollToAbout()}>ABOUT</p>
        </div>
        <div style={navbar}>
          <p onClick={()=>props.scrollToAContact()}>CONTACT</p>
        </div>
      </div>
    </div>
  )
  
}

export default Header;