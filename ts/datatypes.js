var a;
var b;
var c;
var d;
var e;
a = 12;
b = 'hexaware';
c = true;
d = [1, 'hexaware', true];
e = [1, 2, 3];
var pi = 3.14;
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
var backgroundColor = Color.RED;
var word;
word = "hexware";
console.log(word.length); // type assertion - way 1
console.log(word.length); // type assertion - way 2
