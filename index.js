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
  let sizex = 6;
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
}
