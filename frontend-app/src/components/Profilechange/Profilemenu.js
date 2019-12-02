import React, { useState } from 'react';
import './Profilechange.css';
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Profilephoto from "./Profilephoto";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function Profilemenu() {
  return (
    <div class="dropdown">
      <button class="dropbtn" onclick={myFunction()}>Menu
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content" id="myDropdown">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  )

}
export default Profilemenu