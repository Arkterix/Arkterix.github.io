const API_KEY = 'c6dd605771239a0a4ca7bccf86ce08ec';
const city_ID = '6094817';

var getWeather = new XMLHttpRequest();
// var url = `http://api.openweathermap.org/data/2.5/weather?id=${city_ID}&APPID=${API_KEY}`;

var url = 'http://api.openweathermap.org/data/2.5/weather?id=6094817&APPID=c6dd605771239a0a4ca7bccf86ce08ec&units=metric';
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

function determineIcon(codeID)
{
  var digit = (''+codeID)[0];
  var secondDigit = (''+codeID)[1];
  var thirdDigit = (''+codeID)[2];

  if(digit == '2'){
    document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/11d.png\"/>";
  }
  else if(digit == '3'){
    document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/09d.png\"/>";
  }
  else if(digit == '5'){
    if (secondDigit == '0'){
      document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/10d.png\"/>";
    }
    else if(secondDigit == '1'){
      document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/13d.png\"/>";
    }
    else {
      document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/9d.png\"/>";
    }
  }
  else if(digit == '6'){
    document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/13d.png\"/>";
  }
  else if(digit == '7'){
    document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/50d.png\"/>";
  }
  else if (digit == '8') {
    if (thirdDigit == '0'){
      document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/01d.png\"/>";
    }
    else if (thirdDigit == '1'){
      document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/02d.png\"/>";
    }
    else if (thirdDigit == '2'){
      document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/03d.png\"/>";
    }
    else{
      document.getElementById('icon').innerHTML = "<img src=\"./weather_icons/04d.png\"/>";
    }

    //FIX, need night time
  }
}


getWeather.open("GET", url, true);
getWeather.send();
