import React from 'react';

export default function Nav(props) {


  return (
    <div className="navmenu">
      <div id="main">
        <div className="container" onClick={()=> {
          document.querySelector("#mySidenav").style.width = "250px";
          // document.querySelector("#main").style.marginLeft = "250px"; 
        }}>
          <div className="hamnav">&#9776;</div>
        </div>
      </div>

      <div id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={()=> {
          document.querySelector("#mySidenav").style.width = "0";
          // document.querySelector("#main").style.marginLeft = "0";
        }}>&times;
        </div>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Resume</a>
        <a href="#">Contact</a> 
      </div>
    </div>
  )

}