import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
  
  
  <div>

    <ul>
      <li><NavLink to ="/" exact>Home</NavLink></li>
      <li><NavLink to ="/tolisten" exact>Listen to these!</NavLink></li>
      <li><NavLink to ="/albumcontainer" exact>List of albums</NavLink></li>
      <li><NavLink to ="/newalbumform" exact>Add an album!</NavLink></li>
    </ul>









  </div>

)}

export default NavBar;