let a: number;
let b: string;
let c: boolean;
let d: any[];
let e: number[];

a = 12;
b = 'hexaware';
c = true;
d = [1, 'hexaware', true];
e = [1, 2, 3];

const pi = 3.14;

enum Color { RED, GREEN, BLUE };
let backgroundColor = Color.RED;

let word;
word = "hexware";
console.log((<string>word).length);// type assertion - way 1
console.log((word as string).length);// type assertion - way 2

