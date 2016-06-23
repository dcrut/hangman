$(document).ready(initialize);

function initialize() {
  $('#btn1').click(doStuff);
  $('#btn2').click(timer);
  $('#btn3').click(clear);
  $('#btn4').click(numbers);
}

function numbers() {
  for(let i = 0; i < 20; i++){
    let r = Math.random();
    $('#numbers').append(`<li>${r}</li>`);
  }
};

let id;

function clear() {
  clearInterval(id);
}

function timer() {
  id = setInterval(function(){
    $('body').css('background-color', randomColor());
  }, 100);
}
