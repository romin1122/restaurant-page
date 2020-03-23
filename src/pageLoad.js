function loadContainer(){
  let quote=document.createElement("h3");
  quote.id='quote';
  let italic=document.createElement("i");
  italic.innerText="Eat healthy, live healthy.";
  quote.appendChild(italic);

  let story=document.createElement("p");
  story.id="story";
  story.innerText="We are the most reliable local restaurant you can find. We work with honesty, work diligently to serve your food of the desire. Our chefs are well trained to perform their job and have never failed the customers. Our Ingredients are brought from the farmers directly so, we serve as much natural non-processed food as possible. See some reviews of our customers.";

  let review1=document.createElement("p");
  review1.id="review1";
  review1.innerText='"I just love this place. The waiters and workers here do their job just perfectly. If I were to recommend a place, it would definitely be this, The Abdul Restora"'
  review1.innerHTML+="<br><br>";

  let reviewer=document.createElement("span");
  reviewer.id="reviewer";
  reviewer.innerText="- A local customer";

  review1.appendChild(reviewer);

  let container = document.querySelector("#container");
  container.innerHTML="";
  container.appendChild(quote);
  container.appendChild(story);
  container.appendChild(review1);
}



function pageLoad(){
  let logo=document.createElement("span");
  logo.id="logo";
  logo.innerHTML="Abdul<br>Restora";



  let restaurantName=document.createElement("h1");
  restaurantName.align="center";
  restaurantName.id="name";
  restaurantName.innerText="Abdul Restora";

  let container=document.createElement("div");
  container.id="container";

  let border=document.createElement("div");
  border.id="border";


  //tabs start
  let tabs=document.createElement("div");
  tabs.id="tabs";

  let homeTab=document.createElement("span");
  homeTab.id="home";
  homeTab.innerText="Home";

  let menuTab=document.createElement("span");
  menuTab.id="menu";
  menuTab.innerText="Menu";

  let contactTab=document.createElement("span");
  contactTab.id="contact";
  contactTab.innerText="Contact";

  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(contactTab);

  //tabs end

  let quote=document.createElement("h3");
  quote.id='quote';
  let italic=document.createElement("i");
  italic.innerText="Eat healthy, live healthy.";
  quote.appendChild(italic);

  let story=document.createElement("p");
  story.id="story";
  story.innerText="We are the most reliable local restaurant you can find. We work with honesty, work diligently to serve your food of the desire. Our chefs are well trained to perform their job and have never failed the customers. Our Ingredients are brought from the farmers directly so, we serve as much natural non-processed food as possible. See some reviews of our customers.";

  let review1=document.createElement("p");
  review1.id="review1";
  review1.innerText='"I just love this place. The waiters and workers here do their job just perfectly. If I were to recommend a place, it would definitely be this, The Abdul Restora"'
  review1.innerHTML+="<br><br>";

  let reviewer=document.createElement("span");
  reviewer.id="reviewer";
  reviewer.innerText="- A local customer";

  review1.appendChild(reviewer);


  border.appendChild(tabs);
  border.appendChild(container);
  container.appendChild(quote);
  container.appendChild(story);
  container.appendChild(review1);

  let content = document.querySelector("#content");


  content.appendChild(logo);
  content.appendChild(restaurantName);
  content.appendChild(border);

}
export {pageLoad,loadContainer};
