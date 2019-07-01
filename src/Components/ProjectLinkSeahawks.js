import React from 'react';

function ProjectLinkSeahawks(props){

  return(
    <div className="projectLinks">
    <div className="gameLink">
      <a id="hawksId" href={props.linkToProjectSite} target="_blank" rel="noopener noreferrer">
        <div className="moveHawkLogo">
          <img className="hawkImage" src={props.projectLogo} alt="seahawks"/>
        </div>
        <p>Vist Site</p>
      </a>
    </div>
    <div className="gameLink">
      <a href={props.linkToProjectGithub} target="_blank" rel="noopener noreferrer">
        <div className="moveGithubLogoHawks">
          <img className="githubImage" src={props.GithubLogo} alt="github"/>
        </div>
        <p>Github</p>
      </a>
    </div>
  </div>
  );

}
export default ProjectLinkSeahawks;