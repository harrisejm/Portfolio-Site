import React from 'react';
import Project from './Project';
import ProjectLinkChess from './ProjectLinkChess';
import ProjectLinkMine from './ProjectLinkMine';
import ProjectLinkSeahawks from './ProjectLinkSeahawks';

import '../Styles/Samples.css';

import GithubLogo from '../Assets/img/Github.png';
import mineLogo from '../Assets/img/mine.jpeg';
import chessLogo from '../Assets/img/chessLogo.png';
import seahawksLogo from '../Assets/img/seahawksLogo.png';

const titles = ["ONLINE CHESS","CLASSIC MINESWEEPER","SEAHAWKS SITE"];

const linkToChessSite = "https://chess-eddie-harris.web.app";
const linkToMinesweeperSite = "https://minesweeper-edward-harris.web.app";
const linkToHawksSite = "https://seahawks-311da.web.app/"; 

const linkToChessGithub = "https://github.com/harrisejm/Chess";
const linkToMinesweeperGithub = "https://github.com/harrisejm/Minesweeper";
const linkToSeahawksGithub = "https://github.com/harrisejm/Angular-Seahawks.com";

const chessDescription = "Two players can play against each other on two different devices. Only allows legal moves and includes all rules: Piece movements, castling, piece detection, promotion of pawns, tests for all check and checkmate scenarios and conditions. Playable online and locally.";
const minesweeperDescription = "Classic Minesweeper game created in React, with beginner, medium and hard mode."
const seahawksSiteDescription = "Recreated fully functional Seahawks.com responsive website with Angular, including mock articles, videos and the ability for users to leave comments on each article/video (saves to Google Firebase)."

const projectLinks = [<ProjectLinkChess
                        linkToProjectSite={linkToChessSite}
                        projectLogo={chessLogo}
                        linkToProjectGithub={linkToChessGithub}
                        GithubLogo={GithubLogo}/>,
                      <ProjectLinkMine
                        linkToProjectSite={linkToMinesweeperSite}
                        projectLogo={mineLogo}
                        linkToProjectGithub={linkToMinesweeperGithub}
                        GithubLogo={GithubLogo}/>,
                      <ProjectLinkSeahawks 
                        linkToProjectSite={linkToHawksSite}
                        projectLogo={seahawksLogo}
                        linkToProjectGithub={linkToSeahawksGithub}
                        GithubLogo={GithubLogo}/>];

const videos = ['https://www.youtube.com/embed/RoPmivZXRQ0','https://www.youtube.com/embed/OyBSoxaJTUI','https://www.youtube.com/embed/LOEekH17mko'];

const descriptions = [chessDescription,minesweeperDescription,seahawksSiteDescription];


let main;
if (window.screen.width < 450) {
  // main = {
  //   zoom: '70%'
  // }
}

function Samples(){
  return(
    <div style={main} className="main">
      <div className="secondLayer">
        <div className="backdrop">
        </div>
      <div className="portfolioTitle">
        <p>PORTFOLIO</p>
        <p id="samples">samples</p>
      </div>
      {projectLinks.map((projectLink,index)=> {
        return <Project
                video={videos[index]}
                title={titles[index]}
                description={descriptions[index]}
                linksComponent={projectLinks[index]}
               />     
      })}   
      </div>
    </div>
  );
}

export default Samples;