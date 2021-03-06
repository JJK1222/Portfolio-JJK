$(document).ready(function() {
  function homepage_fullpage() {
    
    $('#homepage-fullpage').fullpage({

      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors: ['main','CERTIFICATE', 'DEGREE', 'CAREER', 'DESIGN', 'PUBLISHING', 'ETC'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['','CERTIFICATE', 'DEGREE', 'CAREER', 'DESIGN', 'PUBLISHING', 'ETC'],
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
      sectionsColor : ['#f6f4fc', '#f6f4fc','#f6f4fc', '#f6f4fc','#f6f4fc', '#f6f4fc', '#f6f4fc'],
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


  // ??????????????? ?????? js
  $(".bg_scroll").vegas({
    delay: 7000,
    timer: false,
    shuffle: true,
    firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transition: 'fade',
    transitionDuration: 4000,
    animation: 'random',
    overlay: 'asset/js/vegas/overlays/05.png',
    slides: [
      { src: "asset/images/main_bg/001.jpg" },
      { src: "asset/images/main_bg/002.jpg" },
      { src: "asset/images/main_bg/003.jpg" },
      { src: "asset/images/main_bg/004.jpg" },
      { src: "asset/images/main_bg/005.jpg" }
  ],
  timer: false
  });

  // ?????? ????????? ?????????
  const instance = new Typewriter('#typing', {
    loop: true,
  });

  instance.typeString('html, css,')
    .typeString('<br/>')
    .pauseFor(500)
    .typeString('Javascript')
    .typeString('<br/>')
    .pauseFor(1500)
    .typeString('????????????')
    .pauseFor(1500)
    .typeString(' ??????...')
    .pauseFor(500)
    .typeString('<br/>')
    .typeString('@$&^%*%^& ??')
    .pauseFor(500)
    .deleteAll(30)
    .pauseFor(500)
    .typeString('<br/>')
    .pauseFor(500)
    .typeString('???????????? ??????')
    .pauseFor(300)
    .typeString('<br/>')
    .pauseFor(500)
    .typeString('????????????! ??????!')
    .pauseFor(7000)
    .start();


});

