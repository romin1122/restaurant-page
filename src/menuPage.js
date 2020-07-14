import * as h from "./helpers";
import {loadHomePageContents} from "./homePage";
import {loadContactPageContents} from "./contactPage";

let br = () => h.mE("br", "", "");




let foodContainer = h.mE("div", "id", "foodContainer");


function addFoodItem(name, price, photoURL)
{
	let item = h.mE("div", "class", "foodItem");
	let itemName = h.mE("span", "class", "itemName");
	let itemPrice = h.mE("span", "class", "itemPrice");
	let itemPhoto = h.mE("img", "src", photoURL);

	itemName.innerText = name;
	itemPrice.innerText = price;

	h.aC(item, itemPhoto, br(), br(), itemName, br(), itemPrice);

	h.aC(foodContainer, item);
}

function loadMenuPageContents()
{
	let tabContent = document.querySelector("#tabContent");

	foodContainer.innerHTML = "";
	let footerNavButtons = h.mE("div", "id", "footerNavButtons");

	addFoodItem("Chicken Nugget", "150 tk", "images/chicken nuggets.jpg");
	addFoodItem("Crispy Fried Chicken", "200 tk", "images/crispy fried chicken.jpg");
	addFoodItem("French Fry", "100 tk", "images/french fries.jpg");
	addFoodItem("Vege Sandwich", "200 tk", "images/vege sandwich.jpg");
	addFoodItem("Ramen", "300 tk", "images/ramen.jpg");
	addFoodItem("Boiled Potatoes", "100 tk", "images/boiled potatoes.jpg");
	addFoodItem("Croissant", "180 tk", "images/croissant.jpg");
	addFoodItem("Hummus", "160 tk", "images/hummus.jpg");
	addFoodItem("Masala Dosa", "70 tk", "images/masalaDosa.jpg");
	addFoodItem("Bread /w Butter", "50 tk", "images/bread and butter.jpg");
	addFoodItem("Potato Chips", "50 tk", "images/potatoChips.jpg");
	addFoodItem("Popcorn", "20 tk", "images/butteredPopcorn.jpg");
	addFoodItem("Apple Candy", "40 tk", "images/apple candy.jpg");
	addFoodItem("Waffle", "250 tk", "images/waffle.jpg");
	addFoodItem("Pie", "250 tk", "images/pie.jpg");
	addFoodItem("Pudding", "60 tk", "images/pudding.jpg");
	addFoodItem("Smoothie", "150 tk", "images/smoothie.jpg");
	addFoodItem("Cocacola", "70 tk", "images/cocacola.jpg");
	addFoodItem("Pepsi", "70 tk", "images/pepsi.jpg");


	let homeFBtn = h.mE("button", "id", "homeFooterBtn");
	let contactFBtn = h.mE("button", "id", "contactFooterBtn");
	homeFBtn.innerText = "Home";
	contactFBtn.innerText = "Contact Us";
	homeFBtn.onclick = loadHomePageContents;
	contactFBtn.onclick = loadContactPageContents;
	h.aC(footerNavButtons, homeFBtn, contactFBtn);

	tabContent.innerHTML = "";
	h.aC(tabContent, br(), br(), foodContainer, br(), br(), footerNavButtons);

	window.scrollTo({ top: 0, behavior: 'smooth' });
}
export {loadMenuPageContents};