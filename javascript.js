console.log('hi');

$(document).ready(function() {

  console.log('hi');


  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var picHeight = $('.image1').height();
  var picWidth = $('.image1').width();
  var xCenter = (windowWidth / 2) - (picWidth / 2);
  var yCenter = (windowHeight / 2) - (picHeight / 2);

  setTimeout(function(){
    $('.image1').css({
      'margin-top': yCenter,
      'opacity': '1'
      // 'margin-left': xCenter
    });
  }, 50);

});
