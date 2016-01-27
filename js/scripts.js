
// //Global Variables
// global variables live for the entire duration of the program
/*
1. painted keeps track of whether or not a square has been filled. if filled it's true, if it's empty it's false

2. content keeps track of where X's and O's are placed on the board

3. winningCombinations is a 2D array that holds all of the possible winning combinations.

4. Based on the value fo turn, it returns an "X" for an even number or a "O' for odd.

5. theCanvas tells the program which canvas is being clicked

6. c selects the element with matching ID

7. cxt is c with  

*/



var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;
//
// //Instanciate Arrays

// This (window.load) is the one anonymous function in this program
window.onload=function(){


// the painted array is used to check if the canvas contains something already (an X or an //O) to prevent using the same canvas square again
	painted = []



// the content array is used to see what the canvas contains (X or O)
	content = []
	winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	for(var i = 0; i <= 8; i++){
	painted[i] = false;


	content[i]='';
	}
}

// //Game methods



//canvas Clicked function is the main function of this program. It gets executed every time //a player clicks on a canvas square.




function canvasClicked(canvasNumber){

// Identifies the grid position with the correlated canvas id click function
	theCanvas = "canvas"+canvasNumber;
	c = document.getElementById(theCanvas);
//The CanvasRenderingContext2D interface provides the 2D rendering context for the drawing surface of a <canvas> element. This allows the drawing of the X or the O.
	cxt = c.getContext("2d");


// this code is creating the X

	if(painted[canvasNumber-1] ==false){
		if(turn%2==0){
			cxt.beginPath();
			cxt.moveTo(10,10);
			cxt.lineTo(40,40);
			cxt.moveTo(40,10);
			cxt.lineTo(10,40);
			cxt.stroke();
			cxt.closePath();

			content[canvasNumber-1] = 'X';
		}
// this code is creating the O
		else{
			cxt.beginPath();
			cxt.arc(25,25,20,0,Math.PI*2,true);
			cxt.stroke();
			cxt.closePath();
			content[canvasNumber-1] = 'O';
		}
//

  // Calls the winning function and increments the turn variable.
		turn++;
		painted[canvasNumber-1] = true;
		squaresFilled++;

    // "content[canvasNumber-1]" evaluates to an X or an O (symbol). This symbol (X or O) becomes the argument for the checkForWinners function.

		checkForWinners(content[canvasNumber-1]);
//
		if(squaresFilled==9){
			alert("THE GAME IS OVER!");
			location.reload(true);
		}

	}


	else{
		alert("THAT SPACE IS ALREADY OCCUPIED WITH YOUR HEART!");
	}

}

function checkForWinners(symbol){

	for(var a = 0; a < winningCombinations.length; a++){
	if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==	symbol&&content[winningCombinations[a][2]]==symbol){
		alert(symbol+ " WON!");
		playAgain();
	}
	}

}

function playAgain(){
	y=confirm("PLAY AGAIN?");
	if(y==true){
		alert("OKAY! ^^/>");
		location.reload(true);
	}
	else{
		alert("SO LONG,SUCKER!");
}

}
