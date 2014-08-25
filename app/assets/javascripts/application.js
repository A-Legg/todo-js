
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  $('body').append('<h1>Todoly</h1>');

  $('h1').append("<form><input id='todo' type='text'> \
      <input type='submit'></form></div>");



  var todo = document.getElementById("todo").value;
  $('body').append("<li></li>");
  console.log('todo')

});
