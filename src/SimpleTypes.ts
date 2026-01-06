let isActive: boolean = true;
let hasPermission = false;
console.log(isActive);
console.log(hasPermission);

let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log(float);

let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
console.log(color);
console.log(fullName);
console.log(age);
console.log(sentence);

const bigNumber: bigint = 9007199254740991n;
const hugNumber = BigInt(9007199254740991);
console.log(bigNumber);
console.log(hugNumber);

const uniqueKey: symbol = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);