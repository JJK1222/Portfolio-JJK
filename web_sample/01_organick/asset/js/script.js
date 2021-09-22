// 메인 슬라이드 시작

var slideIndex = 0; //slide index

// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  // Auto Move Slide
  var sec = 5000;
  setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

  }, sec);
}


// Next/previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n].style.display = "block";
  dots[n].className += " active";
}

// 메인 슬라이드 끝


// 카카오 지도삽입 시작
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(35.978561063026056, 128.493212), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.978561063026056, 128.493212); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div class="map_info"><h4>OrganicK</h4><p>경상북도 칠곡군 지천면 창평로 143</p><br><a href="https://map.kakao.com/link/map/OrganicK,35.978561063026056,128.493212" target="_blank">큰지도보기</a><a href="https://map.kakao.com/link/to/OrganicK,35.978561063026056,128.493212" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
iwPosition = new kakao.maps.LatLng(35.978561063026056, 128.493212); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
position : iwPosition,
content : iwContent
});

// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);
// 카카오 지도 삽입 끝


// 스크롤 애니메이션
AOS.init({
easing: 'ease-out-back',
duration: 1000
});

hljs.initHighlightingOnLoad();

$('.hero__scroll').on('click', function(e) {
$('html, body').animate({
scrollTop: $(window).height()
}, 1200);
});


// .box2 유투브 영상 삽입
$("#youtube").YTPlayer().YTPFullscreen();