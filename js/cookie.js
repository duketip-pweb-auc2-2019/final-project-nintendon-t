var NumberOfItems;

$(document).ready(function (){
    if(Cookies.get("items") == null)
    {
        Cookies.set("items", "");
    }
});

function addItem(itemName)
{
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
    return "SHOPPING CART, BE GONE!";
}