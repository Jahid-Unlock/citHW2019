$(document).ready(function(){
    $('.venobox').venobox(); 
});

$('.counter').counterUp({
                delay: 10,
                time: 1000
            });

var mixer = mixitup('.mixit-img');

$(document).ready(function(){
    $('.venobox').venobox(); 
});

$('.review-content').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

