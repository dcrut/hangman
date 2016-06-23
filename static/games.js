/* eslint-disable */

$(document).ready(init);

function init() {
  $('#new').click(newgame);
  $('#flip').click(flip);
}

function flip(){
  const id = $('#id').text();
  const num = Math.floor(Math.random() * 2);
  $.ajax({
    url: `/games/${id}/flip`,
    method: 'put',
    dataType: 'json',
    data: { num },
    success: function(rsp){
      update(rsp);
    }
  });
}

function newgame(){
  const name = $('#name').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function(rsp){
      update(rsp);
    }
  });
}

function update(game){
  $('#person').text(game.name);
  $('#id').text(game._id);
  $('#heads').text(game.heads);
  $('#tails').text(game.tails);
}
