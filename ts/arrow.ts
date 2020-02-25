function printMsg(){
  console.log("Hello All");
};

printMsg();
let printMsg2 = () => {console.log("Hello All")};

printMsg2(); // call arrow function

function addNum(a,b){
  console.log(a+b);
};

let add2 =  (a,b) => console.log(a+b);
add2(2,3);