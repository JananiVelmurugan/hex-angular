function printMsg() {
    console.log("Hello All");
}
;
printMsg();
var printMsg2 = function () { console.log("Hello All"); };
printMsg2(); // call arrow function
function addNum(a, b) {
    console.log(a + b);
}
;
var add2 = function (a, b) { return console.log(a + b); };
add2(2, 3);
