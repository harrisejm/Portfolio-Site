import React from 'react';
// import { relative } from 'path';

let project;
let projectTitle;
let gameInfo;
if (window.screen.width < 450) {
  // project = {
  //   fontSize: 15
  // }
  // projectTitle = {
  //   paddingTop: 10
  // }
  // gameInfo = {
  //   zoom: '140%'
  // }
} 

function Project(props){
  return (
    <div>
      <div style={gameInfo} className="gameInfo">
        <div className="game">
           {/* <video width="600" height="380" preload controls autoplay loop>
             <source src={props.video} type="video/mp4"/>
           </video> */}
           <iframe width="600" height="380" src= {props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="description">
          <p style={projectTitle} className="projectTitle">{props.title}</p>
          <p style={project} className="project">{props.description}</p>
          {props.linksComponent}
        </div>
      </div>
    </div>
  );
}

export default Project;