

//BOARD SETUP
var containerEle = document.getElementsByClassName("container");
var counter = 0;

var loadBoard = () => {
  for (let r=0; r<3; r++) {
		for (let c=0; c<3; c++) {
			var tileEle = document.createElement("div");
		  tileEle.setAttribute("id", `${r}${c}`);
		  tileEle.setAttribute("class", "tile");
			tileEle.setAttribute("style", `height: 128px; width: 128px; flex-basis: 30%; background-color: #9BC1BC;`)
			containerEle[0].appendChild(tileEle);
		}	
	}
	counter = 0;
}

loadBoard();

//GAMEPLAY COMPONENT
var clickFunc = (event) => {
	if (counter%2 === 0) {
		event.target.setAttribute("class", "tile cross");
		event.target.style = "flex-basis: 30%; background-image: url(images/cross.png);";
		setTimeout(
			()=>{
				board[event.target.id[0]][event.target.id[1]] = 'X';
				if (winCheck(board) === 'X') {
					alert ("CROSS WON!");
					resetBoard();
				}
				if (counter === 8) {
					alert("TIED!");
					resetBoard();
				}
			}, 0)
		counter++;

	} else {
		event.target.setAttribute("class", "tile circle");
		event.target.style = "flex-basis: 30%; background-image: url(images/circle.png);";
		setTimeout(
			() => {
				board[event.target.id[0]][event.target.id[1]] = 'O';
				if (winCheck(board) === 'O') {
					alert ("CIRCLE WON!");
					resetBoard();
				}
				if (counter === 9) {
					alert("TIED!");
					resetBoard();
				}
			}, 0)
		counter++;
	}
};

var tilesArr = document.getElementsByClassName("tile");
console.log('tiles', tilesArr);
for (var ele of tilesArr) {
	ele.addEventListener('click', clickFunc, {once: true})
}
	
//BOARD COMPONENT + WIN CHECKER
var board = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
	];

var winCheck = function(board) {
	let result = null;
	console.log('board', board);
	for (let row of board) {
		if (row[0] !== null && row[0] === row[1] && row[1] === row[2]) {
			result = row[0]
			return result;
		};
	};
	for (let c=0; c<3; c++) {
		if (board[0][c] !== null && board[0][c] === board[1][c] && board[1][c] === board[2][c]) {
			result = board[0][c];
			return result;
		};
	};
	if (board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
		result = board[0][0];
		return result;
	};
	if (board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
		result = board[0][2];
		return result;
	};
	return result;
}

var resetBoard = function () {
	while (containerEle[0].hasChildNodes()) {
		containerEle[0].removeChild(containerEle[0].lastChild);
	}
	loadBoard();
}
