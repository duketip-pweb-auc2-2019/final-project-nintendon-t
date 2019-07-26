var itemArray;

$(document).ready(function () {
    accessPosition();

    console.log("Price:" + parseFloat(Cookies.get("price")).toFixed(2));
    $('#price').html("Price: $" + parseFloat(Cookies.get("price")).toFixed(2));

    var displayStringArray = [];
    var bannedStrings = [];
    var itemText = $('p#listing');

    let itemRegex = /,/gi;
    if (!itemRegex.test(Cookies.get("items"))) {
        $(itemText).html($(itemText).html() + "<br>" + "You have no items");
        Cookies.set("items", "");
        return;
    }

    itemArray = Cookies.get("items").split(",");
    if (itemArray.length <= 0) {
        $(itemText).html($(itemText).html() + "<br>" + "You have no items");
        Cookies.set("items", "");
        return;
    }

    //test for duplicates
    for (var i = 0; i < itemArray.length - 1; i++) {
        var isBanned = false;
        if (bannedStrings.length != 0) {
            for (var j in bannedStrings) {
                console.log("Testing with:" + bannedStrings[j] + " and " + itemArray[i]);
                if (bannedStrings[j] == itemArray[i]) {
                    isBanned = true;
                }
            }
        }

        if (!isBanned) {
            var numberOfProducts = 1;
            for (var i2 = 0; i2 < itemArray.length; i2++) {
                if (itemArray[i] == itemArray[i2]) {
                    numberOfProducts++;
                }
            }
            displayStringArray[i] = itemArray[i] + " x" + (numberOfProducts - 1).toString();
            bannedStrings.push(itemArray[i]);
            console.log("added " + itemArray[i] + " to the banned string array");
        }
    }

    //Do some last minute formatting
    for (var i = 0; i < displayStringArray.length; i++) {
        // if(!displayStringArray[i])
        // {
        //     displayStringArray.splice(i, 1,"string");
        // }
        var filtered = displayStringArray.filter((el) => {
            return el != null;
        })
    }
    console.log(filtered);
    for (var i = 0; i < filtered.length; i++) {
        $(itemText).html($(itemText).html() + "<br>" + filtered[i].toString());
    }

});

function accessPosition() {
    //navigation
    console.log("attempting to locate");
    if (navigator.geolocation) {
        console.log("location allowed");
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("got permission");
            var key = "4cd1c5453912de493b118f52070312b7";
            $.get("https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&unit=imperial&appid=" + key, function (data) {
                $('#delivery').html("Your items will arrive in 1-2 weeks. We have located you at " + data.name + ".");
            });
        });
    } else {
        console.log("location blocked");
        $('#delivery').addClass("d-none");
    }
}

function clearCart() {
    Cookies.set("items", "");
    Cookies.set("price", "0");
    return "SHOPPING CART, BE GONE!";
}

function Pay() {
    $('#confirmation').addClass("d-none");
    $('#confirmation').addClass("d-block");
    let itemRegex = /,/gi;
    if (itemRegex.test(Cookies.get("items"))) {
        clearCart();
        $('#confirmation').html("Thank you for your purchase");
    } else {
        $('#confirmation').html("You have nothing in your cart");
    }
}