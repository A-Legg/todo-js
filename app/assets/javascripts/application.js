//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {
  $('body').append('<h1>Todoly</h1>');

  $('body').append("<form><input id='todo' type='text'> \
      <input type='submit' class='submit' value='Create Todo '></form></div>");


  $('body').append('<div class="todo"><h2>Todo!</h2></div>');

  $('body').append('<div class="completed"><h2>Completed!</h2></div>');



  $('form').on("submit", function (e) {
    e.preventDefault();
    var toDo = document.getElementById("todo").value;
    $('.todo').append('<h2 class="flash">' + toDo + '  Created' + '<span id="delete-flash">X </span>' + '</h2>');
    $('.todo').append('<li>' + toDo + '<span id="complete">√</span>' +   '<span id="delete">X</span> ' + '</li>');

    $('.flash').fadeOut(5000);
  });


  $('body').on('click', '#delete', function (e) {
    $(this).parent().remove();

  });

  $('body').on('click', '#complete', function (e) {
    var toDone = $(this.parentElement);
    debugger;

    $('.completed').append('<h2>   </h2>');

    $('.completed').append(toDone);


  });

  $('.todo').on('click', '#delete-flash', function (e) {
    $(this).parent().remove();
  });


});







