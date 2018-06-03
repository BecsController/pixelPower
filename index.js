document.addEventListener('DOMContentLoaded', start)

function start (){
   createCanvas();
   createPalette();

  function createCanvas(){
     let canvas = document.getElementById("myCanvas");
     let sizey = 100;
     let sizex = 50;
     for (var i = 0; i < sizex; i++){
       let row = document.createElement("tr");  //create rows to size of x
       for (var j = 0; j < sizey; j++){
         let cell = document.createElement("td"); //create cols to size of y
         cell.width = "15px";   //set cell width and height
         cell.height = "15px";
         cell.classList.add("cell"); //add class cell to each cell
         cell.setAttribute('id', 'row'+ i +'col' + j) //set id of coordinates
         row.appendChild(cell); //add each cell to row
       }
       canvas.appendChild(row); //add each row to canvas
     }
   }
let cells = document.getElementsByClassName("cell");

for (var k = 0; k < cells.length; k++){
  cells[k].addEventListener("click", paint); //loop through cells and add click event
}

let currentColor = '';

function paint (cell){
  event.target.classList.add(currentColor)//on click add current color as class to cell
}

function createPalette(){
  let palette = document.getElementById("palette");
  let sizey = 2;
  let sizex = 10;
  for (var i = 0; i < sizex; i++){
    let paletteRow = document.createElement("tr"); //create rows to size of x
    for (var j =0; j < sizey; j++){
      let paletteCell = document.createElement("td"); //create cols to size of y
      paletteCell.width = '50px';
      paletteCell.height = '50px';
      paletteCell.setAttribute('id', 'p' + 'row'+ i +'col' + j)
      paletteRow.appendChild(paletteCell);
      paletteCell.addEventListener("click", changeColor);
    }
    palette.appendChild(paletteRow);
  }
}

let resetButton = document.getElementById("reset"); //find reset button and add
resetButton.addEventListener("click", clearBoard); //click event

function clearBoard (){
    location.reload();
} //need a better way to reset the board

function changeColor (){
    let colorPicker = $(this).attr('class');
    currentColor = colorPicker;
  }; //let the current color be the class of the color clicked in palette

var paletteOne = document.getElementById("prow0col0");
var paletteTwo = document.getElementById("prow0col1");
var paletteThree = document.getElementById("prow1col0");
var paletteFour = document.getElementById("prow1col1");
var paletteFive = document.getElementById("prow2col0");
var paletteSix = document.getElementById("prow2col1");
var paletteSeven = document.getElementById("prow3col0");
var paletteEight = document.getElementById("prow3col1");
var paletteNine = document.getElementById("prow4col0");
var paletteTen = document.getElementById("prow4col1");
var paletteEleven = document.getElementById("prow5col0");
var paletteTwelve = document.getElementById("prow5col1");
var paletteThirteen = document.getElementById("prow6col0");
var paletteFourteen = document.getElementById("prow6col1");
var paletteFifteen = document.getElementById("prow7col0");
var paletteSixteen = document.getElementById("prow7col1");
var paletteSeventeen = document.getElementById("prow8col0");
var paletteEighteen = document.getElementById("prow8col1");
var paletteNineteen = document.getElementById("prow9col0");
var paletteTwenty = document.getElementById("prow9col1");

paletteOne.classList.add("red");
paletteTwo.classList.add("redder");
paletteThree.classList.add("orange");
paletteFour.classList.add("lightOrange");
paletteFive.classList.add("yellow");
paletteSix.classList.add("lightGreen");
paletteSeven.classList.add("midGreen");
paletteEight.classList.add("darkGreen");
paletteNine.classList.add("turquoise");
paletteTen.classList.add("aqua");
paletteEleven.classList.add("lightBlue");
paletteTwelve.classList.add("midBlue");
paletteThirteen.classList.add("darkBlue");
paletteFourteen.classList.add("indigo");
paletteFifteen.classList.add("grape");
paletteSixteen.classList.add("lightPink");
paletteSeventeen.classList.add("midPink");
paletteEighteen.classList.add("darkPink");
paletteNineteen.classList.add("white");
paletteTwenty.classList.add("outline");
}
