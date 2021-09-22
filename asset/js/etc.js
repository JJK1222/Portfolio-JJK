$(document).ready(function() {
  function homepage_fullpage() {
    
    $('#homepage-fullpage').fullpage({

      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors: ['','', '', '', '', '', ''],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['2012','2013_1', '2013_2', '2014_1', '2014_2', '2018_1', '2018_2'],
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


  // 메인 타이핑 텍스트
  const instance = new Typewriter('#typing', {
    loop: true,
  });

  instance.typeString('html, css,')
    .typeString('<br/>')
    .pauseFor(500)
    .typeString('Javascript')
    .typeString('<br/>')
    .pauseFor(1500)
    .typeString('어렵지만')
    .pauseFor(1500)
    .typeString(' 재밌...')
    .pauseFor(500)
    .typeString('<br/>')
    .typeString('@$&^%*%^& ??')
    .pauseFor(500)
    .deleteAll(30)
    .pauseFor(500)
    .typeString('<br/>')
    .pauseFor(500)
    .typeString('도전하는 내가')
    .pauseFor(300)
    .typeString('<br/>')
    .pauseFor(500)
    .typeString('아름답다! 아자!')
    .pauseFor(7000)
    .start();


});

