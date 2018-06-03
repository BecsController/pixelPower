document.addEventListener('DOMContentLoaded', start)

function start (){
   createCanvas();
   createPalette();

  function createCanvas(){
     let canvas = document.getElementById("myCanvas");
     let sizey = 100;
     let sizex = 50;
     for (var i = 0; i < sizex; i++){
       let row = document.createElement("tr");
       for (var j = 0; j < sizey; j++){
         let cell = document.createElement("td");
         cell.width = "15px";
         cell.height = "15px";
         cell.classList.add("cell");
         cell.setAttribute('id', '#row'+ i +'col' + j)
         row.appendChild(cell);
       }
       canvas.appendChild(row);
     }
   }
let cells = document.getElementsByClassName("cell");

for (var k = 0; k < cells.length; k++){
  cells[k].addEventListener("click", paint);
}
let currentColor = '';
function paint (cell){
  event.target.classList.add(currentColor)
}

function createPalette(){
  let palette = document.getElementById("palette");
  let sizey = 2;
  let sizex = 10;
  for (var i = 0; i < sizex; i++){
    let paletteRow = document.createElement("tr");
    for (var j =0; j < sizey; j++){
      let paletteCell = document.createElement("td");
      paletteCell.width = '50px';
      paletteCell.height = '50px';
      paletteCell.setAttribute('id', 'p' + '#row'+ i +'col' + j)
      paletteRow.appendChild(paletteCell);
      paletteCell.addEventListener("click", changeColor);
    }
    palette.appendChild(paletteRow);
  }
}

// let paletteCells = document.getElementsByClassName("paletteCell");
//
// for (var l = 0; l < paletteCells.length; l++){
//   paletteCells[l].addEventListener("click", changeColor);
// }

function changeColor (){
    let colorPicker = $(this).attr('class');
    currentColor = colorPicker;
  };

var paletteOne = document.getElementById("p#row0col0");
var paletteTwo = document.getElementById("p#row0col1");
var paletteThree = document.getElementById("p#row1col0");
var paletteFour = document.getElementById("p#row1col1");
var paletteFive = document.getElementById("p#row2col0");
var paletteSix = document.getElementById("p#row2col1");
var paletteSeven = document.getElementById("p#row3col0");
var paletteEight = document.getElementById("p#row3col1");
var paletteNine = document.getElementById("p#row4col0");
var paletteTen = document.getElementById("p#row4col1");
var paletteEleven = document.getElementById("p#row5col0");
var paletteTwelve = document.getElementById("p#row5col1");
var paletteThirteen = document.getElementById("p#row6col0");
var paletteFourteen = document.getElementById("p#row6col1");
var paletteFifteen = document.getElementById("p#row7col0");
var paletteSixteen = document.getElementById("p#row7col1");
var paletteSeventeen = document.getElementById("p#row8col0");
var paletteEighteen = document.getElementById("p#row8col1");
var paletteNineteen = document.getElementById("p#row9col0");
var paletteTwenty = document.getElementById("p#row9col1");

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
