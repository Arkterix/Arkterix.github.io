function main() {
  $('.page-title').hide();
  $('.page-title').fadeIn(1000);

  $('.img-circle').hide();
  $('.img-circle').fadeIn(1000);

  $('.intro_words').hide();
  $('.intro_words').fadeIn(1000);
}

$(document).ready(main);

var windowHeight = window.innerHeight;
var navBarHeight = $('.navbar').height();
var getDownButtonHeight = $('#section05').height();
$('.text_container').css("top", windowHeight-getDownButtonHeight);

$('.intro_words').css("height",windowHeight-navBarHeight-getDownButtonHeight);
$('.intro_words').css("margin-top",navBarHeight);
console.log(windowHeight-navBarHeight-getDownButtonHeight);


$("#section05").click(function() {
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
