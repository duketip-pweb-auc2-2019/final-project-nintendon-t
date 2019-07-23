var weatherDescriptor = "";
var enemyName;

var enemyImg = $("#enemy");
var actionText = $("#actionText");
var outcomeText = $("#outcome");

//screens
var loading = $("#loading");
var game = $("#game");

$(document).ready(function () {
    $(game).addClass("d-none");
    $(loading).addClass("d-block");

    getGeolocation();
});

function getGeolocation() {
    navigator.geolocation.getCurrentPosition(getWeather);
}

function getWeather(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var key = "4cd1c5453912de493b118f52070312b7";
    $.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&unit=imperial&appid=" + key, function (data) {
        weatherDescriptor = data.weather[0].main;
        console.log(weatherDescriptor);

        $(loading).removeClass("d-block");
        $(loading).addClass("d-none");

        $(game).addClass("d-block");

        switch (weatherDescriptor) {
            case "Clouds":
                $(enemyImg).attr("src", "img/angry clouds.png")
                enemyName = "Angry Cloud";
                break;
            case "Clear":
                $(enemyImg).attr("src", "https://static.giantbomb.com/uploads/square_small/12/126726/1774729-sppbanzaibill.png")
                enemyName = "Angry Sun";
                break;
            case "Drizzle":
                $(enemyImg).attr("src", "https://clipground.com/images/drop-of-rain-clipart-19.jpg")
                enemyName = "Acid Rain Drop";
                break;
        }
        $(actionText).html("You've encountered an " + enemyName);
    });
}

function attack()
{
    $("button.d-inline").attr("onclick", "");

    $(outcomeText).html("");
    $(actionText).html("You attacked the " + enemyName + ".");
    setTimeout(function()
    {
        $(enemyImg).attr("src", "http://orig04.deviantart.net/8de6/f/2011/143/2/f/blood_splatter_transparency_by_sagacious-d3h1yw6.png");
        $(outcomeText).html("It died almost immediatly.");
    }, 2000);
}

function flee()
{
    $("button.d-inline").attr("onclick", "");

    $(outcomeText).html("");
    $(actionText).html("You ran away.");
    setTimeout(function()
    {
        $(outcomeText).html("Coward. Go fight.");
    }, 2000);
}

