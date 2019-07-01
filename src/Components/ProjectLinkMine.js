import React from 'react';

function ProjectLinkMine(props){

  return(
    <div className="projectLinks">
    <div className="gameLink">
      <a href={props.linkToProjectSite} target="_blank" rel="noopener noreferrer">
        <div className="moveMineLogo">
          <img className="chessImage" src={props.projectLogo} alt="mine"/>
        </div>
        <p>Play Game</p>
      </a>
    </div>
    <div className="gameLink">
      <a href={props.linkToProjectGithub} target="_blank" rel="noopener noreferrer">
        <div className="moveGithubLogo">
          <img className="githubImage" src={props.GithubLogo} alt="github"/>
        </div>
        <p>Github</p>
      </a>
    </div>
  </div>
  );

}
export default ProjectLinkMine;