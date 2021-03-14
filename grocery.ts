//Grocery Class
class Grocery {
    item: string;
    constructor(
        public name: string, 
        public quantity: number, 
        public price: number, 
        public department: string
        ) {
        this.item = name + quantity + price + department;
    }
}

interface Groceries {
    name: string;
    quantity: number; 
    price: number; 
    department: string;
}

function groc(groceries: Groceries) {
    return groceries.name + groceries.quantity + groceries.price + groceries.department;
}
//Groceries 
let groc_list = (
    new Grocery("milk",1,3,"dairy"),
    new Grocery("bread",2,5,"bakery"),
    new Grocery("eggs",3,4,"fridge"),
    new Grocery("red pepper",5,2,"produce"),
    new Grocery("steak",2,15,"meat"),
    new Grocery("Tylenol",1,6,"health"),
    new Grocery("soap",4,3,"health")
);

document.body.textContent = groc(groc_list);
