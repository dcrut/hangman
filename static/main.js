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

setTimeout(function () {
  let end = Date.now() + 100000;
  while (Date.now() < end)
  console.log('setTimeout');
}, 100)

s
  id = setInterval(function(){
    $('body').css('background-color', randomColor());
  }, 100);
}
