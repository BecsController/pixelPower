document.addEventListener('DOMContentLoaded', start)

function start (){

createCanvas();

function createCanvas(){
let size = 40;
  for (var i = 0; i < size; i++){
    $('table').append('<tr></tr>');
    for (var j = 0; j < size; j++){
      $('tr:last').append('<td></td>');
      $('td').attr("class", 'cells');
    }
  }
}

$('.cells').click(function(event){
  var paint = $('#colorPicker').val();
  $(event.target).css('background-color', paint);
})
let cells = document.getElementsByClassName("cells")
cells.addEventListener("click", paint);

}
