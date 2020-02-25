var Food = /** @class */ (function () {
    function Food(id, name) {
        this.id = id;
        this.name = name;
    }
    Food.prototype.printFood = function () {
        console.log(this.id);
        console.log(this.name);
    };
    return Food;
}());
var obj = new Food(1, "Idli");
obj.printFood();
