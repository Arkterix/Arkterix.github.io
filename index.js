var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var navBarHeight = $(".navbar").height();
var getDownButtonHeight = $("#section05").height();
var getHelloWordHeight = $(".intro_words").height();
var getTextContainerHeight = $(".text_container").height();

$(document).ready(main);

function main() {

    $(".intro_words").hide();
    $(".intro_words").fadeIn(2000);

    var typed = new Typed("#hello_world", {
      stringsElement: "#hello_world-strings",
      strings: ["Hello<br>World"],
      typeSpeed: 110
    });

    $("#dateIndicator").hide();
    $("#dateIndicator").fadeIn(2000);

    $("#icon").hide();
    $("#icon").fadeIn(2000);

    $("#tempIndicator").hide();
    $("#tempIndicator").fadeIn(2000);
}

if (window.innerWidth <= 674){
  var date = moment().format("dddd,<br>MMMM Do");
}
else {
  var date = moment().format("dddd, MMMM Do");
}
document.getElementById("Date").innerHTML = date;

$(".twinkling").css("height", windowHeight-getHelloWordHeight);
$(".intro_container").css("height",windowHeight-navBarHeight-getDownButtonHeight);
$(".intro_container").css("top",navBarHeight);
$(".container").css("height", getTextContainerHeight+windowHeight-getDownButtonHeight);
$(".text_container").css("top", window.innerHeight-getDownButtonHeight);

var md_dev = document.getElementById("md_dev");
var web_dev = document.getElementById("web_dev");
var ui_design = document.getElementById("ui_design");
var teamwork = document.getElementById("teamwork");
var python = document.getElementById("python");
var java = document.getElementById("java");
var c = document.getElementById("c");
var problemS = document.getElementById("problemS");

window.onload = function(){
  $(".page-loading").fadeOut("slow");
  $(".text_container").css("top", window.innerHeight-getDownButtonHeight);
};

var waypoints1 = new Waypoint(
{
  element: $(".text_container"),
  handler: function(direction)
  {
    if (direction == "down")
    {
      setTimeout(function(){
        $(".intro_words").fadeOut();
        $("#dateIndicator").fadeOut();
        $("#icon").fadeOut();
        $("#tempIndicator").fadeOut();
        $(".credits").fadeOut();
        $(".navbar").toggleClass("menublack");
      }, 30)
    }
  },
  offset: windowHeight-navBarHeight-navBarHeight-getDownButtonHeight-getHelloWordHeight+40
})

var waypoints2 = new Waypoint(
{
  element: $(".text_container"),
  handler: function(direction)
  {
    if (direction == "up")
    {
      setTimeout(function(){
        $(".intro_words").fadeIn();
        $("#dateIndicator").fadeIn();
        $("#icon").fadeIn();
        $("#tempIndicator").fadeIn();
        $(".credits").fadeIn();
        $(".navbar").removeClass("menublack");
      }, 30)
    }
  },
  offset: windowHeight-navBarHeight-navBarHeight-getDownButtonHeight-getHelloWordHeight+40
})

var waypoint3 = new Waypoint({
  element: $(".item_stat_container"),
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
  offset: "70%"
})

var getWeather = new XMLHttpRequest();
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=6167865&APPID=c6dd605771239a0a4ca7bccf86ce08ec&units=metric";

getWeather.open("GET", weatherURL, true);
getWeather.send();

getWeather.onreadystatechange = function getIcon()
{
  if (this.readyState == 4 && this.status == 200)
  {
    var weatherArray = JSON.parse(this.responseText);
    var year = (new Date()).getFullYear();
    
    determineIcon(weatherArray.weather["0"].icon);

    var temp = Number(Math.round(weatherArray.main.temp+"e1")+"e-1");

    document.getElementById("Temperature").innerHTML = temp;
    document.getElementById("year").innerHTML = year;
  }
}

function determineIcon(codeID)
{
  var iconID = codeID;
  var windowHeight = window.innerHeight;
  var navBarHeight = $(".navbar").height();
  var getDownButtonHeight = $("#section05").height();
  var getHelloWordHeight = $(".intro_words").height();
  var getIconWidth = $("#icon").width();

  $("#icon").children("img").attr("src", "<source here>");

  document.getElementById("icon").innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/"+iconID+".png\"/>";
}

$("#homeLink").click(function() {
  jQuery("html,body").animate({scrollTop:0},"slow");
});

$(".dropdown_section").click(function() {
    $("html,body").animate({
        scrollTop: $(".about_section").offset().top - navBarHeight},
        "slow");
});

$("#projectButton").click(function() {
    $("html,body").animate({
        scrollTop: $(".project_section").offset().top - navBarHeight},
        "slow");
});

$("#workButton").click(function() {
    $("html,body").animate({
        scrollTop: $(".work_section").offset().top - navBarHeight},
        "slow");
});

$("#aboutButton").click(function() {
    $("html,body").animate({
        scrollTop: $(".about_section").offset().top - navBarHeight},
        "slow");
});

$("#contactButton").click(function() {
    $("html,body").animate({
        scrollTop: $(".contact_section").offset().top - navBarHeight},
        "slow");
});

$(".nav a").click(function(){
  $(".navbar-collapse").collapse("hide");
});
