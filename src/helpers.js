let contentContainer = document.querySelector("#content");
let call = new Audio("call.mp3");



//make Element
function mE(name, type, value)
{
	let el = document.createElement(name);
	el[type] = value;
	return el;
}

function playAudio()
{	
	call.play();
}


//append child
function aC(el, ...args)
{
	for (let i = 0; i < args.length; i++) el.appendChild(args[i]);

	return el;
}






export {contentContainer, mE, aC, playAudio};