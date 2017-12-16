// JavaScript source code
var colors = generatColorArray(6);

    //call random color Array function

var squares = document.querySelectorAll(".squares");
var pickColor = colors[pikedColor(colors)];
var rgbDisplay = document.querySelector("#rgbDisplay");
var tryCorrect = document.querySelector("#tryCorrect");
var resetButton = document.querySelector("#resetButton");
var largeButton = document.querySelector("#largeGame");
var smallButton = document.querySelector("#smallGame");
var h1 = document.querySelector("h1");
var statusCheck = 0;


largeButton.addEventListener("click", function () {
    NewGame(6);
    statusCheck = 0;
    resetButton.textContent = "New Game";   
    h1.style.backgroundColor = "steelBlue";
    tryCorrect.textContent = "    "; 
    smallButton.classList.remove("selected");
    largeButton.classList.add("selected");

});

smallButton.addEventListener("click", function () {
    NewGame(3);
    statusCheck = 1;
    resetButton.textContent = "New Game";
    tryCorrect.textContent = "    "; 
    h1.style.backgroundColor = "steelBlue";
    smallButton.classList.add("selected");
    largeButton.classList.remove("selected");

});

resetButton.addEventListener("click", function () {
    if (statusCheck === 1) {
        NewGame(3);
    } else {
        NewGame(6);
    }
    resetButton.textContent = "New Game";
    tryCorrect.textContent = "    "; 
    h1.style.backgroundColor = "steelBlue";
});

rgbDisplay.textContent = pickColor;


for (var i = 0; i < colors.length; i++) {
    // each square has his own color    
    squares[i].style.backgroundColor = colors[i];

    // add click event for each square
    squares[i].addEventListener("click", function () {

        // compare the clicked color with the pickcolor
        if (this.style.backgroundColor === pickColor) {
            changeAllColors(this.style.backgroundColor);

            //change the status
            tryCorrect.textContent = "Correct!";

            resetButton.textContent = "Play Again"
            h1.style.backgroundColor = this.style.backgroundColor;
        } else {

            this.style.backgroundColor = "#232323";
            tryCorrect.textContent = "Try Again";
        }
    });
}


function changeAllColors(color) {
    for (var j = 0; j < colors.length; j++) {
        squares[j].style.backgroundColor = color;
       
    }
}

function pikedColor(colors) {

    var ranNo = Math.floor(Math.random() * colors.length);
    return ranNo;
}

function ArrayColors() {
    
    //create random No. for Red color
    var r = Math.floor(Math.random() * 256);
    //create random No. for green color
    var g = Math.floor(Math.random() * 256);
    //create random No. for blue color
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
        
    
}

function generatColorArray(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(ArrayColors());
    }
    return arr;
}

function NewGame(num) {
    colors = generatColorArray(num);
    pickColor = colors[pikedColor(colors)];
    rgbDisplay.textContent = pickColor;
    if (num === 3) {
        for (var i = 0; i < colors.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i + 3].style.backgroundColor = "#232323";
        }
    }
    if (num === 6) {
        for (i = 0; i < colors.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            
        }
    }

}