$(document).ready(function () {
    var displayStringArray = [];
    var bannedStrings = [];

    if (Cookies.get("items") == null) {
        Cookies.set("items", "");
        return;
    }

    var itemArray = Cookies.get("items").split(",");
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
    for(var i = 0; i < displayStringArray.length; i++)
    {
        // if(!displayStringArray[i])
        // {
        //     displayStringArray.splice(i, 1,"string");
        // }
        var filtered =displayStringArray.filter((el) => {
            return el !=null;
        })
    }
    console.log(filtered);
});