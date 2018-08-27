

//BOARD SETUP
var containerEle = document.getElementsByClassName("container");

for (let i=1; i<10; i++) {
	var tileEle = document.createElement("div");
	tileEle.setAttribute("class", `tile ${i}`);
	tileEle.setAttribute("style", `height: 128px; width: 128px; flex-basis: 30%; background-color: #9BC1BC;`)
	containerEle[0].appendChild(tileEle);
}

//GAMEPLAY COMPONENT
var counter = 0;
var clickFunc = (event) => {
	if (counter%2 === 0) {
		event.target.style = "flex-basis: 30%; background-image: url(images/cross.png);";
		counter++;
	} else {
		event.target.style = "flex-basis: 30%; background-image: url(images/circle.png);";
		counter++;
	}
};

var tilesArr = document.getElementsByClassName("tile");
console.log(tilesArr);
for (var ele of tilesArr) {
	ele.addEventListener('click', clickFunc, {once: true})
	console.log('listener added!')
}
	
