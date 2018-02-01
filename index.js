function main() {
  $(".intro_words").hide();
  $(".intro_words").fadeIn(2000);

  $('#dateIndicator').hide();
  $('#dateIndicator').fadeIn(2000);

  $('#icon').hide();
  $('#icon').fadeIn(2000);

  $('#tempIndicator').hide();
  $('#tempIndicator').fadeIn(2000);
}

$(document).ready(main);

var windowHeight = window.innerHeight;
var navBarHeight = $('.navbar').height();
var getDownButtonHeight = $('#section05').height();
var getHelloWordHeight = $('.intro_words').height();

if (window.innerWidth <= 674){
  var date = moment().format("dddd,<br>MMMM Do");
  $('#dateIndicator').css("top", (windowHeight-navBarHeight-getDownButtonHeight)-getHelloWordHeight-85);
}
else {
  var date = moment().format("dddd, MMMM Do");
  $('#dateIndicator').css("top", (windowHeight-navBarHeight-getDownButtonHeight)-getHelloWordHeight-75);
}
document.getElementById('Date').innerHTML = date;

$('#icon').css("top", (windowHeight-navBarHeight-getDownButtonHeight)-getHelloWordHeight-105);
$('#tempIndicator').css("top", (windowHeight-navBarHeight-getDownButtonHeight)-getHelloWordHeight-100);

$('.text_container').css("top", windowHeight-getDownButtonHeight);
$('.intro_container').css("height",windowHeight-navBarHeight-getDownButtonHeight);
$('.intro_container').css("top",navBarHeight);
$('.intro_words').css("top",windowHeight-navBarHeight-navBarHeight-getDownButtonHeight-getHelloWordHeight+40);

$(".dropdown_section").click(function() {
    $('html,body').animate({
        scrollTop: $(".about_section").offset().top - navBarHeight},
        'slow');
});

$("#workButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".work_section").offset().top - navBarHeight},
        'slow');
});

$("#aboutButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".about_section").offset().top - navBarHeight},
        'slow');
});

$("#contactButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact_section").offset().top - navBarHeight},
        'slow');
});

$('.nav a').click(function(){
  $('.navbar-collapse').collapse('hide');
});

var md_dev = document.getElementById('md_dev')
var web_dev = document.getElementById('web_dev')
var ui_design = document.getElementById('ui_design')
var teamwork = document.getElementById('teamwork')
var python = document.getElementById('python')
var java = document.getElementById('java')
var c = document.getElementById('c')
var problemS = document.getElementById('problemS')

var waypoints1 = new Waypoint(
{
  element: $('.text_container'),
  handler: function(direction)
  {
    if (direction == 'down')
    {
      setTimeout(function(){
        $(".intro_words").fadeOut();
        $('#dateIndicator').fadeOut();
        $('#icon').fadeOut();
        $('#tempIndicator').fadeOut();
      }, 30)
    }
  },
  offset: windowHeight-navBarHeight-navBarHeight-getDownButtonHeight-getHelloWordHeight+40
})

var waypoints2 = new Waypoint(
{
  element: $('.text_container'),
  handler: function(direction)
  {
    if (direction == 'up')
    {
      setTimeout(function(){
        $(".intro_words").fadeIn();
        $('#dateIndicator').fadeIn();
        $('#icon').fadeIn();
        $('#tempIndicator').fadeIn();
      }, 300)
    }
  },
  offset: windowHeight-navBarHeight-navBarHeight-getDownButtonHeight-getHelloWordHeight+40
})

var waypoint3 = new Waypoint({
  element: $('.item_stat_container'),
  handler: function(direction) {
    setTimeout(function(){
      md_dev.style.animation = "md_rec1 1s forwards"
      web_dev.style.animation = "md_rec2 1s forwards"
      ui_design.style.animation = "md_rec3 1s forwards"
      teamwork.style.animation = "md_rec4 1s forwards"
      python.style.animation = "md_rec5 1s forwards"
      java.style.animation = "md_rec6 1s forwards"
      c.style.animation = "md_rec7 1s forwards"
      problemS.style.animation = "md_rec8 1s forwards"
    }, 500)
  },
  offset: '70%'
})
