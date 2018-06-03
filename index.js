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

function paint (cell){
  event.target.classList.add("outline")
}

function createPalette(){
  let palette = document.getElementById("palette");
  let sizey = 5;
  let sizex = 4;
  for (var i = 0; i < sizex; i++){
    let paletteRow = document.createElement("tr");
    for (var j =0; j < sizey; j++){
      let paletteCell = document.createElement("td");
      paletteCell.width = '50px';
      paletteCell.height = '50px';
      paletteCell.setAttribute('id', 'p' + '#row'+ i +'col' + j)
      paletteRow.appendChild(paletteCell);
    }
    palette.appendChild(paletteRow);
  }
}
var paletteOne = document.getElementById("p#row0col0");
var paletteTwo = document.getElementById("p#row0col1");
var paletteThree = document.getElementById("p#row0col2");
var paletteFour = document.getElementById("p#row0col3");
var paletteFive = document.getElementById("p#row0col4");
var paletteSix = document.getElementById("p#row1col0");
var paletteSeven = document.getElementById("p#row1col1");
var paletteEight = document.getElementById("p#row1col2");
var paletteNine = document.getElementById("p#row1col3");
var paletteTen = document.getElementById("p#row1col4");
var paletteEleven = document.getElementById("p#row2col0");
var paletteTwelve = document.getElementById("p#row2col1");
var paletteThirteen = document.getElementById("p#row2col2");
var paletteFourteen = document.getElementById("p#row2col3");
var paletteFifteen = document.getElementById("p#row2col4");
var paletteSixteen = document.getElementById("p#row3col0");
var paletteSeventeen = document.getElementById("p#row3col1");
var paletteEighteen = document.getElementById("p#row3col2");
var paletteNineteen = document.getElementById("p#row3col3");
var paletteTwenty = document.getElementById("p#row3col4");

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
