const API_KEY = 'c6dd605771239a0a4ca7bccf86ce08ec';
const city_ID = '6094817';

var getWeather = new XMLHttpRequest();
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?id=6094817&APPID=c6dd605771239a0a4ca7bccf86ce08ec&units=metric';
var getTime = new XMLHttpRequest();
var timeURL = 'http://api.geonames.org/timezoneJSON?lat=45.4&lng=-75.7&username=chuy009'
var day = true;

getWeather.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    var weatherArray = JSON.parse(this.responseText);

    determineIcon(weatherArray.weather["0"].id);

    var temp = Number(Math.round(weatherArray.main.temp+'e1')+'e-1');

    document.getElementById('Temperature').innerHTML = temp;
  }
}
getWeather.open("GET", weatherURL, true);
getWeather.send();

getTime.onreadystatechange = function isDayOrNight()
{
  if (this.readyState == 4 && this.status == 200)
  {
    var timeArray = JSON.parse(this.responseText);

    //only taking hours into consideration, not minutes
    var sunrise = parseInt(timeArray.sunrise.slice(11,13));
    var sunset = parseInt(timeArray.sunset.slice(11,13));
    var currentTime = parseInt(timeArray.time.slice(11,13));

    if(between(currentTime,sunrise,sunset) == true)
    {
      day = true;
    }
    else {
      day = false;
    }
  }
}
getTime.open("GET", timeURL, true);
getTime.send();

function between(x, min, max) {
  if (x >= min && x <= max)
  {
    return true;
  }
  else {
    return false;
  }
}

function determineIcon(codeID)
{
  var digit = (''+codeID)[0];
  var secondDigit = (''+codeID)[1];
  var thirdDigit = (''+codeID)[2];
  var windowHeight = window.innerHeight;
  var navBarHeight = $('.navbar').height();
  var getDownButtonHeight = $('#section05').height();
  var getHelloWordHeight = $('.intro_words').height();
  var getIconWidth = $('#icon').width();

  $('#icon').children('img').attr('src', '<source here>');

  if(digit == '2'){
    document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/11d.png\"/>";
  }
  else if(digit == '3'){
    document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/09d.png\"/>";
  }
  else if(digit == '5'){
    if (secondDigit == '0'){
      document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/10d.png\"/>";
    }
    else if(secondDigit == '1'){
      document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/13d.png\"/>";
    }
    else {
      document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/9d.png\"/>";
    }
  }
  else if(digit == '6'){
    document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/13d.png\"/>";
  }
  else if(digit == '7'){
    document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/50d.png\"/>";
  }
  else if (digit == '8') {
    if (thirdDigit == '0'){
      if (day == true){
        document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/01d.png\"/>";
      }
      else {
        document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/01n.png\"/>";
      }
    }
    else if (thirdDigit == '1'){
      if (day == true){
        document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/02d.png\"/>";
      }
      else {
        document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/02n.png\"/>";
      }
    }
    else if (thirdDigit == '2'){
      if (day == true){
        document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/03d.png\"/>";
      }
      else {
        document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/03n.png\"/>";
      }
    }
    else{
      if (day == true){
        document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/04d.png\"/>";
      }
      else {
        document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/04n.png\"/>";
      }
    }

    //FIX, need night time
  }
}

var date = moment().format("dddd MMMM Do");
document.getElementById('Date').innerHTML = date;