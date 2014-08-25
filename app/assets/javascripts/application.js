
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  $('body').append('<h1>Todoly</h1>');

  $('body').append("<form><input id='todo' type='text'> \
      <input type='submit'></form></div>");






  $('form').on("submit", function(e) {
      e.preventDefault();
      var toDo = document.getElementById("todo").value;
     $('body').append('<li>' + toDo + '</li>')

  });

});
