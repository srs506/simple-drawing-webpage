$(function() {
  var _player, _body, _html, _timeout = null;
  
  $(document).click(function() {
    initialize();
  });
});

function initialize() {
  _player = $('#player');
  _body   = $('body');
  _html   = $('html');
  
  $('#startText').fadeOut(200);
  _html.css('cursor', 'none');
    
  $(document).mousemove(function() {
    _player.offset({left: (event.pageX - 25), top: (event.pageY - 25)  });
  });

  $(document).mousedown(function() {
    _timeout = setInterval(function() {
      _player.clone().appendTo(document.body);
       console.log("mousedown");
    }, 1);
  });

  $(document).mouseup(function() {
    clearInterval(_timeout);
    $(document).off('mousedown');
    console.log("mouseup");
  });
}