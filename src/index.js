import {pageLoad,loadContainer} from './pageLoad.js';
import {loadMenu} from "./loadMenu.js";
import {loadContact} from "./loadContact.js";

window.onload=function(){
  pageLoad();
  
  let home=document.querySelector("#home");
  let menu=document.querySelector("#menu");
  let contact=document.querySelector("#contact");
  
  home.onclick=function(){
    home.classList.add("tabSelected");
    menu.classList.remove("tabSelected");
    contact.classList.remove("tabSelected");
    
    loadContainer();
  }
  
  menu.onclick=function(){
    menu.classList.add("tabSelected");
    home.classList.remove("tabSelected");
    contact.classList.remove("tabSelected");
    
    loadMenu();
  }
  
  contact.onclick=function(){
    contact.classList.add("tabSelected");
    menu.classList.remove("tabSelected");
    home.classList.remove("tabSelected");
    
    loadContact();
  }
  
  home.click();
}