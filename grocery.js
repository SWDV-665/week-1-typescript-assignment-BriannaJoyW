//Grocery Class
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price, department) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.department = department;
        this.item = name + quantity + price + department;
    }
    return Grocery;
}());
function groc(groceries) {
    return groceries.name + groceries.quantity + groceries.price + groceries.department;
}
//Groceries 
var groc_list = (new Grocery("milk", 1, 3, "dairy"),
    new Grocery("bread", 2, 5, "bakery"),
    new Grocery("eggs", 3, 4, "fridge"),
    new Grocery("red pepper", 5, 2, "produce"),
    new Grocery("steak", 2, 15, "meat"),
    new Grocery("Tylenol", 1, 6, "health"),
    new Grocery("soap", 4, 3, "health"));

document.body.textContent = groc(groc_list);
