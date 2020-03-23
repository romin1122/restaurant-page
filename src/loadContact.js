function loadContact(){
  let container=document.querySelector("#container");
  container.innerHTML="";
  
  let p=document.createElement("p");
  p.id="contactContainer";
  p.innerHTML="We offer home deliver in less than 30 minutes. Call us now at +880123456789.<br><br>Come visit us at our restaurant.<br>Address: Dhaka, Bangladesh.<br>Phone: +8801777789898<br>E-main: support@me.co";
  container.appendChild(p);
  
}

export {loadContact};