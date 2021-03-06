$(document).ready(function() {
  function homepage_fullpage() {
    
    $('#homepage-fullpage').fullpage({

      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors: ['','', '', '', '', '', ''],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['2020','2019','2019','2018','2018','2017','2016','2015','2015','2014','2014','2013','2013','2013','2012'],
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',


      //Scrolling
      css3: true,
      scrollingSpeed: 800,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: true,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      sectionsColor : ['#fff', '#fff','#fff', '#fff','#fff', '#fff', '#fff'],
      paddingTop: '0em',
      paddingBottom: '0em',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

    });
  }
  homepage_fullpage();

  // mobile toggle gnb
  $("#toggle").click(function() {
    $(this).toggleClass("open");
    $("#gnb").toggleClass("opened");
  });

});

