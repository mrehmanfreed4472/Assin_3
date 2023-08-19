
{ console.log("Method 1");
    function additem(){
    var item:string[]=["Mobile","Laptop","Tablet","Camera","Speakers"];
    item.unshift("TV","AC");
    console.log(item);
}additem();
}
{
    console.log("Method 2 for add item");
    function additem2(){
     var item2:string[]=["bike","car","bus","train","aeroplane"];
     item2.push("ship","boat");
        console.log(item2);
    }additem2();
}
console.log("--------------------------------------------------");

{console.log("Method 1 for remove item");
    function removeitem(){
        var item:string[]=["Mobile","Laptop"];
        item.shift();
        console.log(item);}
        removeitem();
}
{
    console.log("Method 2 for remove item");
    function removeitem2(){
        var item2:string[]=["Bike","Car","Bus","Train","Aeroplane"];
        item2.pop();
        console.log(item2);
    }removeitem2();
}
console.log("--------------------------------------------------");
{console.log("Method 1 for update item");

    function updateitem(){
     var item:string[]=["Mobile","Laptop","Tablet","Camera","Speakers"];
        item.splice(2,1,"TV","AC");
        console.log(item);
    }updateitem();
}
{
    console.log("Method 2 for update item");
    function updateitem2(){
        var item2:string[]=["Bike","Car","Bus","Train","Aeroplane"];
        item2.splice(2,1,"Ship","Boat");
        console.log(item2);}
updateitem2();
}
