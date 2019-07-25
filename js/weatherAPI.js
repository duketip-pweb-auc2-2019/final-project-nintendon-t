var weatherDescriptor = "";
var enemyName;

var enemyImg = $("#enemy");
var actionText = $("#actionText");
var outcomeText = $("#outcome");

//screens
var loading = $("#loading");
var game = $("#game");

var isWorking = false;

$(document).ready(function () {
    $(game).addClass("d-none");
    $(loading).addClass("d-block");

    getGeolocation();
});

function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
        setTimeout(summonTheUndefined(), 7500);
    } else {
        summonTheUndefined();
    }
}

function summonTheUndefined() {
    if (!isWorking) {
        $(enemyImg).attr("src", "http://cdn.wikimg.net/strategywiki/images/thumb/9/9e/EB_Giygas.png/250px-EB_Giygas.png");
        enemyName = "undefined";
        $(actionText).html("You've encountered an " + enemyName);
        $(game).addClass("d-block");
        $(loading).removeClass("d-block");
        $(loading).addClass("d-none");
        $(outcomeText).html("You feel your soul die within you");
    }
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
                isWorking = true;
                $(enemyImg).attr("src", "https://piskel-imgstore-b.appspot.com/img/87c08199-af1c-11e9-89d9-2146e9607a02.gif")
                enemyName = "Angry Cloud";
                break;
            case "Clear":
                isWorking = true;
                $(enemyImg).attr("src", "https://isaactv.files.wordpress.com/2013/04/angrysun-large1.gif")
                enemyName = "Angry Sun";
                break;
            case "Drizzle":
                isWorking = true;
                $(enemyImg).attr("src", "https://clipground.com/images/drop-of-rain-clipart-19.jpg")
                enemyName = "Acid Rain Drop";
                break;
            default:
                summonTheUndefined();
                break;
        }
        console.log(isWorking);
        $(actionText).html("You've encountered an " + enemyName);
        $(outcomeText).html("It looks pretty angry...");
    });
}

function attack() {
    $(outcomeText).html("");

    if (enemyName != "undefined") {
        $("button.d-inline").attr("onclick", "");
        $(actionText).html("You attacked the " + enemyName + ".");
        setTimeout(function () {
            $(enemyImg).attr("src", "http://orig04.deviantart.net/8de6/f/2011/143/2/f/blood_splatter_transparency_by_sagacious-d3h1yw6.png");
            $(outcomeText).html("It died almost immediatly...");
        }, 2000);
    } else {
        $(actionText).html("You attacked the " + enemyName + ".");
        setTimeout(function () {
            $(outcomeText).html("It cannot be killed...");
        }, 2000);
    }
}

function flee() {
    $(outcomeText).html("");

    if (enemyName != "undefined") {
        $("button.d-inline").attr("onclick", "");
        $(actionText).html("You ran away...");
        setTimeout(function () {
            $(outcomeText).html("Coward.");
        }, 2000);
    } else {
        $(actionText).html("You ran away.");
        setTimeout(function () {
            $(outcomeText).html("You cannot escape it.");
        }, 2000);
    }
}

function insult() {
    $(outcomeText).html("");

    if (enemyName != "undefined") {
        $("button.d-inline").attr("onclick", "");
        $(actionText).html("You insulted the " + enemyName + ".");
        setTimeout(function () {
            $("#Fasty").attr("src", "http://orig04.deviantart.net/8de6/f/2011/143/2/f/blood_splatter_transparency_by_sagacious-d3h1yw6.png");
            $(outcomeText).html(" The " + enemyName + " Attacked! You died almost immediatly...");
        }, 2000);
    } else {
        $(actionText).html("You insulted the " + enemyName + ".");
        setTimeout(function () {
            $(outcomeText).html("It decided to become your friend!");
        }, 2000);
    }
}
function giveup() {
    $(outcomeText).html("");

    if (enemyName != "undefined") {
        $("button.d-inline").attr("onclick", "");
        $(actionText).html("You lied on the ground and waited patiently for death. ");
        setTimeout(function () {
            $("#Fasty").attr("src", "http://orig04.deviantart.net/8de6/f/2011/143/2/f/blood_splatter_transparency_by_sagacious-d3h1yw6.png");
            $(outcomeText).html(" The " + enemyName + " took its chance! You died almost immediatly...");
        }, 2000);
    } else {
        $("button.d-inline").attr("onclick", "");
        $(actionText).html("You lied on the ground and waited patiently for death.  " );
        setTimeout(function () {
            $("#Fasty").attr("src", "http://orig04.deviantart.net/8de6/f/2011/143/2/f/blood_splatter_transparency_by_sagacious-d3h1yw6.png");
            $(outcomeText).html("The  Undefined took it's chance! You died almost immediatly...");
        }, 2000);
    }
}
function talk() {
    $(outcomeText).html("");

    if (enemyName != "undefined") {
        $("button.d-inline").attr("onclick", "");
        $(actionText).html("You had a nice chat with the " + enemyName + ". You resolved the situation peacefuly...");
        setTimeout(function () {
            $(outcomeText).html("You decided to go get some drinks later");
        }, 2000);
    } else {
        $("button.d-inline").attr("onclick", "");
        $(actionText).html("You tried to talk to the Undefined, but...");
        setTimeout(function () {
            $("#Fasty").attr("src", "http://orig04.deviantart.net/8de6/f/2011/143/2/f/blood_splatter_transparency_by_sagacious-d3h1yw6.png");
            $(outcomeText).html("It disagreed with your point of view! You died almost immediatly...");
        }, 2000);
    }
}
function item() {
    $(outcomeText).html("");

    if (enemyName != "undefined") {
        $("button.d-inline").attr("onclick", "");
        $(actionText).html("You decided to eat a sandwich you were saving for later.");
        setTimeout(function () {
            $(enemyImg).attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEVDJmBbyuw/AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC");
            $(outcomeText).html(" The " + enemyName + " stole your sandwich and ran away! You lied on the ground and cried for a few hours...");
        }, 2000);
    } else {
        $("button.d-inline").attr("onclick", "");
        $(actionText).html("You decided to eat a sandwich you were saving for later.");
        setTimeout(function () {
            $(enemyImg).attr("src", "https://media0.giphy.com/media/3o6ZtalNPn9Rva8I4o/giphy.gif");
            $(outcomeText).html(" The " + enemyName + " stole your sandwich and ran away! You lied on the ground and cried for a few hours...");
        }, 2000);
    }
}