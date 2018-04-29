var getWeather = new XMLHttpRequest();
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?id=5992500&APPID=c6dd605771239a0a4ca7bccf86ce08ec&units=metric';

getWeather.open("GET", weatherURL, true);
getWeather.send();

getWeather.onreadystatechange = function getIcon()
{
  if (this.readyState == 4 && this.status == 200)
  {
    var weatherArray = JSON.parse(this.responseText);
    
    determineIcon(weatherArray.weather["0"].icon);

    var temp = Number(Math.round(weatherArray.main.temp+'e1')+'e-1');

    document.getElementById('Temperature').innerHTML = temp;
  }
}

function determineIcon(codeID)
{
  var iconID = codeID;
  var windowHeight = window.innerHeight;
  var navBarHeight = $('.navbar').height();
  var getDownButtonHeight = $('#section05').height();
  var getHelloWordHeight = $('.intro_words').height();
  var getIconWidth = $('#icon').width();

  $('#icon').children('img').attr('src', '<source here>');

  document.getElementById('icon').innerHTML = "<img class = \"weatherIcon\" src=\"./weather_icons/"+iconID+".png\"/>";

}
