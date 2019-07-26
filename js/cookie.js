var NumberOfItems;

$(document).ready(function (){
    if(Cookies.get("items") == null)
    {
        clear();
    }
});

function addItem(itemName, price)
{
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