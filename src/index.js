import {loadHomePageContents} from "./homePage";
import {loadMenuPageContents} from "./menuPage";
import {loadContactPageContents} from "./contactPage";
import * as h from "./helpers";


let contentContainer = document.querySelector("#content");
let br = h.mE("br", "", "");


let couponUpdater = () =>
{
	let coupon = document.querySelector("#coupon");
	if (localStorage.getItem("couponSet") == null)
	{
		localStorage.setItem("couponSet" , "true");
		localStorage.setItem("couponSetTime", Date.now());
		couponUpdater();
	}
	else if (Date.now() - eval(localStorage.getItem("couponSetTime")) > 7200000)
	{
		coupon.style.display = "none";
	}
	else
	{
		let couponTimer = document.querySelector("#couponTimer");
		
		let timeLeft = Date.now() - eval(localStorage.getItem("couponSetTime"));
		couponTimer.innerText = `${120 - Math.floor(timeLeft / 60000)} mins ${60 - Math.floor(timeLeft / 1000) % 60} seconds`;
	
		setTimeout(couponUpdater, 1000);
	}
}




let top = h.mE("div", "id", "top");

let restaurantTitle = h.mE("span", "id", "restaurantTitle");
restaurantTitle.innerText = "GUSTEAU'S";

let cart = h.mE("img", "id", "cart");
cart["src"] = "images/cart.svg";
cart["alt"] = "This should have been a cart";

h.aC(top, restaurantTitle, cart);


let coupon = h.mE("div", "id", "coupon");
let couponTimer = h.mE("span", "id", "couponTimer");
let couponImg = h.mE("img", "src", "images/coupon.svg"); 
let couponTextContainer = h.mE("div", "", "");

let span1 = document.createElement("span");
let span2 = document.createElement("span");

span1.innerText = "Get an excellent discount of 68% if you buy something in ";
span2. innerText = ". Hurry up, what are you waiting for!";

h.aC(couponTextContainer, span1, couponTimer, span2);
h.aC(coupon, couponImg, couponTextContainer);



let mainTabs = h.mE("div", "id", "mainTabs");
let homeTab = h.mE("button", "id", "homeTab");
homeTab.innerText = "Home";

let menuTab = h.mE("button", "id", "menuTab");
menuTab.innerText = "Menu";

let contactTab = h.mE("button", "id", "contactTab");
contactTab.innerText = "Contact Us";

h.aC(mainTabs, homeTab, menuTab, contactTab);



let tabContent = h.mE("div", "id", "tabContent");


let footer = h.mE("footer", "", "");
let footerText = h.mE("span", "", "");
footerText.innerText = "\u00A9 Copyright GUSTEAU'S 2020";
h.aC(footer, footerText);

h.aC(contentContainer, top, coupon, mainTabs, tabContent, footer);
couponUpdater();


homeTab.onclick = loadHomePageContents;
menuTab.onclick = loadMenuPageContents;
contactTab.onclick = loadContactPageContents;




loadHomePageContents();