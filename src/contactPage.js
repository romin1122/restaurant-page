import * as h from "./helpers";
import {loadHomePageContents} from "./homePage";
import {loadMenuPageContents} from "./menuPage";

let br = () => h.mE("br", "", "");

function loadContactPageContents()
{
	let tabContent = document.querySelector("#tabContent");

	let mapContainer = h.mE("div", "id", "map");
	let homeDeliver = h.mE("div", "id", "homeDeliver");
	let form = h.mE("form", "", "");
	let footerNavButtons = h.mE("div", "id", "footerNavButtons");
	

	let map = h.mE("div", "id", "map");
	let mapText = h.mE("span", "", "");
	if (( window.innerWidth <= 800 )) map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.885645106396!2d2.3424050152969076!3d48.86039097928759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f2d02ce3be5%3A0xf3ddecd9249ad52c!2sGusteau%20restaurant!5e0!3m2!1sen!2sbd!4v1594252354217!5m2!1sen!2sbd" width="${window.innerWidth - 70}" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
	else map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.885645106396!2d2.3424050152969076!3d48.86039097928759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f2d02ce3be5%3A0xf3ddecd9249ad52c!2sGusteau%20restaurant!5e0!3m2!1sen!2sbd!4v1594252354217!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
	mapText.innerText = "VISIT US NOW";
	h.aC(mapContainer, mapText, br(), br(), map);


	let homeDeliverText = h.mE("span", "", "");
	let audio = h.mE("button", "id", "audio");
	homeDeliverText.innerText = "You can now get home delivery by calling in the number below.";
	audio.innerText = "Call Now";
	audio.onclick = h.playAudio;
	h.aC(homeDeliver, br(), homeDeliverText, br(), br(), audio, br());


	let inputName = h.mE("input", "placeholder", "Name");
	let inputEmail = h.mE("input", "placeholder", "Email");
	let textarea = h.mE("textarea", "placeholder", "Content");
	let submit = h.mE("button", "", "");
	inputEmail.type = "email";
	submit.innerText = "Submit";
	submit.onclick = () => {alert("It actually doesnt work!"); return false;}; 
	h.aC(form, br(), inputName, br(), inputEmail, br(), textarea, br(), br(), submit);



	let homeFBtn = h.mE("button", "id", "homeFooterBtn");
	let menuFBtn = h.mE("button", "id", "menuFooterBtn");
	homeFBtn.innerText = "Home";
	menuFBtn.innerText = "Menu";
	homeFBtn.onclick = loadHomePageContents;
	menuFBtn.onclick = loadMenuPageContents;
	h.aC(footerNavButtons, homeFBtn, menuFBtn);

	tabContent.innerHTML = "";
	h.aC(tabContent, mapContainer, homeDeliver, form, br(), br(), footerNavButtons);

	window.scrollTo({ top: 0, behavior: 'smooth' });
}
export {loadContactPageContents};