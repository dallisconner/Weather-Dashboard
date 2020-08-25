 var APIKey = "ae7eae7dc4c9912dee5d8a9d25a3c4bf";
 var searchInput = "christiansburg";

 var iconcode;
 var iconurl;

 var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
   "q="+ searchInput + "&appid=" + APIKey;

var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?" +
   "q="+ searchInput + "&appid=" + APIKey;

 $.ajax({
   url: queryURL,
   method: "GET"
 })
   .then(function(response) {

     console.log(queryURL);
     console.log(response);

     $(".city").html(response.name);
     $(".wind").text("Wind Speed: " + response.wind.speed);
     $(".humidity").text("Humidity: " + response.main.humidity);
     iconcode = response.weather[0].icon;
     iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
     $('#wicon').attr('src', iconurl);
     console.log(iconurl);
     
     var tempF = (response.main.temp - 273.15) * 1.80 + 32;
     $(".tempF").text("Temperature (F): " + tempF.toFixed(2));

     console.log("Wind Speed: " + response.wind.speed);
     console.log("Humidity: " + response.main.humidity);
     console.log("Temperature (F): " + tempF);
   });

   $.ajax({
    url: queryURL2,
    method: "GET"
  })
    .then(function(response2) {

        console.log(queryURL2);
        console.log(response2);
 
      for(var i=0;i<5;i++)
      {   
        var tempRef = response2.list[i].main.temp;
        var humidityRef = response2.list[i].main.humidity;
        
        $(".humidity"+[i]).text("Humidity: " + humidityRef);
        
        var tempF = (tempRef - 273.15) * 1.80 + 32;
        $(".tempF"+[i]).text("Temperature (F): " + tempF.toFixed(2));
      }
    });