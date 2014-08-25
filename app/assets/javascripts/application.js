
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  $('body').append('<h1>Todoly</h1>');

  $('body').append("<form><input id='todo' type='text'> \
      <input type='submit' class='submit' value='Create Todo'></form></div>");

  $('body').append('<p class="flash"></p>');




  $('form').on("submit", function(e) {
      e.preventDefault();
      var toDo = document.getElementById("todo").value;
     $('body').append('<li>' + toDo + '</li>')

  });


  (function($) {
    $.fn.flash_message = function(options) {

      options = $.extend({
        text: 'Todo Created',
        time: 5000,
        how: 'before',
        class_name: ''
      }, options);

      return $(this).each(function() {
        if( $(this).parent().find('.flash_message').get(0) )
          return;

        var message = $('<span />', {
          'class': 'flash_message ' + options.class_name,
          text: options.text
        }).hide().fadeIn('fast');

        $(this)[options.how](message);

        message.delay(options.time).fadeOut('normal', function() {
          $(this).remove();
        });

      });
    };
  })(jQuery);



  $('.submit').click(function() {
    $('body p').flash_message({
      text: "Todo created",
      how: 'append',
      time: 5000,
      color: 'green'

    })
  })

});
