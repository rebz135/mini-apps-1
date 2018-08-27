

//BOARD SETUP
var containerEle = document.getElementsByClassName("container");

for (let r=0; r<3; r++) {
	for (let c=0; c<3; c++) {
		var tileEle = document.createElement("div");
	  tileEle.setAttribute("id", `${r}${c}`);
	  tileEle.setAttribute("class", "tile");
		tileEle.setAttribute("style", `height: 128px; width: 128px; flex-basis: 30%; background-color: #9BC1BC;`)
		containerEle[0].appendChild(tileEle);
	}	
}

//GAMEPLAY COMPONENT
var counter = 0;
var clickFunc = (event) => {
	if (counter%2 === 0) {
		event.target.setAttribute("class", "tile cross");
		event.target.style = "flex-basis: 30%; background-image: url(images/cross.png);";
		board[event.target.id[0]][event.target.id[1]] = 'X';
		console.log('board', board);
		counter++;

	} else {
		event.target.setAttribute("class", "tile circle");
		event.target.style = "flex-basis: 30%; background-image: url(images/circle.png);";
		board[event.target.id[0]][event.target.id[1]] = 'O';
		console.log('board', board);
		counter++;
	}
};

var tilesArr = document.getElementsByClassName("tile");
console.log('tiles', tilesArr);
for (var ele of tilesArr) {
	ele.addEventListener('click', clickFunc, {once: true})
	console.log('listener added!')
}
	
//CHECK WIN OR TIE
var board = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
	];

var winCheck = function(board) {
	let result = null;
	if (result !== undefined) {
		return result;
	}
	for (let row of board) {
		if (row[0] !== null && row[0] === row[1] === row[2]) {
			return result = row[0];
		};
	};
	for (let c=0; c<3; c++) {
		if (board[0][c] !== null && board[0][c] === board[1][c] === board[2][c]) {
			return result = board[0][c];
		};
	};
	if (board[0][0] !== null && board[0][0] === board[1][1] === board[2][2]) {
		return result = board[0][0];
	};
	if (board[0][2] !== null && board[0][2] === board[1][1] === board[2][0]) {
		return result = board[0][2];
	};
}
