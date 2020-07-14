import * as h from "./helpers";
import {loadMenuPageContents} from "./menuPage";
import {loadContactPageContents} from "./contactPage";

let br = () => h.mE("br", "", "");


function loadHomePageContents()
{
	let tabContent = document.querySelector("#tabContent");
	let homeContents = h.mE("div", "id", "homeContents");
	let home1stPara = h.mE("div", "id", "home1stPara");
	let reasonToChoose = h.mE("div", "id", "reasonToChoose");
	let reviewsTitle = h.mE("h3", "id", "reviewsTitle");
	let reviews = h.mE("div", "id", "reviews");
	let footerNavButtons = h.mE("div", "id", "footerNavButtons");


	home1stPara.innerHTML = "Hey there, Thanks for visiting our online restaurant. Buy some delicous food from our <b>Menu</b> and get it delivered to your Home device IP address in no time.";


	let reasonTitle = h.mE("span", "id", "reasonTitle");
	let reasonChef = h.mE("div", "id", "reasonChef");
	let reasonEquipment = h.mE("div", "id", "reasonEquipment");
	let reasonOrganic = h.mE("div", "id", "reasonOrganic");

	reasonTitle.innerText = "Our specialities";

	let chefImages = h.mE("div", "id", "chefImages");
	let chef1 = h.mE("img", "id", "chef1");
	let chef2 = h.mE("img", "id", "chef2");
	let chef3 = h.mE("img", "id", "chef3");
	h.aC(chefImages, chef1, chef2, chef3);
	let reasonChefText = h.mE("span", "", "");
	chef1["src"] = "images/best chef(rat) 2.png";
	chef2["src"] = "images/gusteau (chef) 2.jpg";
	chef3["src"] = "images/mr bean (chef) 2.jpeg";

	reasonChefText.innerText = "We have the best chef you can ever find anywhere.";
	h.aC(reasonChef, chefImages, br(), reasonChefText);

	let eqImg = h.mE("img", "src", "images/bestMachine.png");
	let rEText = h.mE("span", "", "");
	rEText.innerText = "We use the top branded utensils made by the finest engineers.";
	h.aC(reasonEquipment, eqImg, br(), br(), rEText);

	let rOImg = h.mE("img", "src", "images/fresh 2.jpg");
	let rOImg2 = h.mE("img", "src", "images/fresh2.png");
	let rOText = h.mE("span", "", "");
	rOText.innerText = "Best and Fresh Ingredients collected right from the locals or producers.";
	h.aC(reasonOrganic, rOImg, rOImg2, br(), br(), rOText);

	h.aC(reasonToChoose, reasonTitle, br(), br(), reasonChef, br(), br(), reasonEquipment, br(), br(), reasonOrganic);


	reviewsTitle.innerText = "Reviews";
	reviewsTitle.style.textDecoration = "bold";


	let review1 = h.mE("div", "id", "review1");
	let review2 = h.mE("div", "id", "review2");
	let review3 = h.mE("div", "id", "review3");
	let review4 = h.mE("div", "id", "review4");
	
	let review1Text = h.mE("span", "", "");
	let review2Text = h.mE("span", "", "");
	let review3Text = h.mE("span", "", "");
	let review4Text = h.mE("span", "", "");

	review1Text.innerText = "My God! This places food tastes like the way my mother used to make it.";
	review2Text.innerText = "Even tho I am not from this planet I have never tasted something so good but the boiled potatoes feels totally tasteless";
	review3Text.innerText = "Waffles Waffles Waffles.";
	review4Text.innerText = "I love Pie. This place's pie hypnotized me yo. You better check it out.";

	h.aC(review1, review1Text);
	h.aC(review2, review2Text);
	h.aC(review3, review3Text);
	h.aC(review4, review4Text);

	h.aC(reviews, review1, review2, review4);


	let menuFBtn = h.mE("button", "id", "menuFooterBtn");
	let contactFBtn = h.mE("button", "id", "contactFooterBtn");
	menuFBtn.innerText = "Menu";
	contactFBtn.innerText = "Contact Us";
	menuFBtn.onclick = loadMenuPageContents;
	contactFBtn.onclick = loadContactPageContents;
	h.aC(footerNavButtons, menuFBtn, contactFBtn);



	tabContent.innerHTML = "";
	h.aC(homeContents, br(), home1stPara, br(), br(), reasonToChoose, br(), br(), reviewsTitle, br(), reviews, br(), br())
	h.aC(tabContent, homeContents, footerNavButtons);

	window.scrollTo({ top: 0, behavior: 'smooth' });
}

export {loadHomePageContents};