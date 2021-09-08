$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    // scrollHorizontally: true,
    easing: 'easeInOutCubic',
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['box1','box2','box3','box4'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    scrollOverflow: true,
    scrollOverflowOptions: null,
    menu: '#menu',
    anchors: ['section1','section2', 'section3', 'section4'],
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);


  // mobile toggle gnb
  $("#toggle").click(function() {
    $(this).toggleClass("open");
    $("#gnb").toggleClass("opened");
  });
});
