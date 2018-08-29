

Input: -
Output: -
Constraints:
-Cannot reset game state by refreshing page
-Only use DOM methods to listen for events and update DOM as gameplay progresses
-No jQuery, React

Edge cases:
-User clicks the same box twice (ignore click?) //TO DO!

Justification: 

Features:
-First move starts with player X
-App detects win or tie and displays appropriate mesasge
-A button resets game for new round of gameplay

Plan:
	- View
		-3x3 board consisting of boxes of height X and width Y, styled directly with html
		-If users click box, replace content with image of X or Y // APPEND X OR Y TO NODE?
		-Reset button
  - Controller
  	-Event listeners on 
  		-Each box
  			-If clicked, append x or y to node
  		-Button
  		  -If clicked, replace all html in body
  -

Pseudocode:
	//Render basic html template [DONE]
	//Add reset button to header [DONE]
	//Create tile [DONE]
	//Append tile 9 times onto body with class=board, tile id [DONE]
	//Create turn counter [DONE]
	//Attach event listeners on click onto each tile [DONE]
		//On click, append appropriate text into tile element [DONE]
		  //Check if win or tie [DONE]
		  	//Reset board if win or tie
			//Check that tile hasn't been clicked before [DONE]
	//Attach event listener on click to reset button [DONE]
	  //Reset board [DONE]

// Win checker function:
// 	Input: tuple coordinates [column, row] of all crosses or circles on board
// 	Output: win or 
// 	Pseudocode:
// 		-Get elements with class cross or circles
// 		-Create object with keys of rows and values of array of column positions at that row
// 		-Iterate through each tuple and push column value into appropriate row
// 		-If array length in any of keys = 3, then return result of win
// 		-If 





TO DO:
-Fix disappearing boxes after row is full


