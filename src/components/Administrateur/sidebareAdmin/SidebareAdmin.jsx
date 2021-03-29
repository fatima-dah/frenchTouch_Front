import React, { useEffect, useState } from "react";
import "./SidebareAdmin.css";

function SidebareAdmin() {

  const [showMenu, setMenu] = useState(false)
 
 
  function show() {
    setMenu(!showMenu)
    console.log(showMenu)
  }
 
  const closeMenu = () =>{
      setMenu(false)
  }



  return (
      <div>
    <div id="side-bar" className={showMenu? "active ":null}>
      <div className="toggle-btn" /*{showMenu === false ? "toggle-btn":null }*/ onClick={()=>show()} id="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
  
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li className="list">Contact</li>
      </ul>
    </div>
    
    <section className="content" onClick={()=>closeMenu()}>
      <h1>Admin Home</h1>
     
    </section>
    </div>
  );
}

export default SidebareAdmin;
