var NumberOfItems;

$(document).ready(function (){
    let itemRegex = /,/gi;
    if (!itemRegex.test(Cookies.get("items"))) {
        clear();
    }else{
        $('#notification').removeClass();
        $('#notification').addClass("fas fa-circle");
        $('#notification').addClass("d-inline");
    }
});

function addItem(itemName, price)
{
    $('#notification').removeClass();
    $('#notification').addClass("fas fa-circle");
    $('#notification').addClass("d-inline");
    Cookies.set("price", (parseFloat(Cookies.get("price")) + price).toString());
    Cookies.set("items", Cookies.get("items") + itemName + ",");
    console.log(Cookies.get("items"));

    //get length
    var itemArray = Cookies.get("items").split(',');
    NumberOfItems = itemArray.length - 1;
    console.log(NumberOfItems);
}

function clear()
{
    Cookies.set("items", "");
    Cookies.set("price", "0");
    return "SHOPPING CART, BE GONE!";
}