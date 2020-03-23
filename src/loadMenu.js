function loadMenu(){
  let container=document.querySelector("#container");
  container.innerHTML="";


  let menu=document.createElement("div");
  menu.id="menuContainer";

  function createItem(name,amount,price){
    let item=document.createElement("div");
    item.classList.add("menuItem");

    let itemName=document.createElement("p");
    itemName.classList.add("itemName");
    itemName.innerText=name;

    let itemAmount=document.createElement("p");
    itemAmount.classList.add("itemAmount");
    itemAmount.innerHTML=amount;

    let itemPrice=document.createElement("p");
    itemPrice.classList.add("itemPrice");
    itemPrice.innerText=price;

    item.appendChild(itemName);
    item.appendChild(itemAmount)
    item.appendChild(itemPrice);
    return item;
  }

  menu.appendChild(createItem("Sheek Kebab","2 Sheek Kababs with 2 pieces of nun","80 ৳ "));
  menu.appendChild(createItem("Kacchi Buryani","Special Biryani made with meat of goat.","200 ৳ "));
  menu.appendChild(createItem('Chicken biryani',"Special Biryani with chicken and egg.","190 ৳ "));
  menu.appendChild(createItem('Lunch Set 1',"A bowl of rice, Chicken Cury, Dal.","150 ৳ "  ));
  menu.appendChild(createItem("Lunch Set 2","A bowl of rice, Fish cury, Dal","180 ৳"));

  container.appendChild(menu);
}
export {loadMenu};
