let greeting: string = "Hello World";
let userCount: number = 42;
let isLoading: boolean = false;
let scores: number[] = [100, 95];

// Kodunuzu daha sürdürülebilir ve kendi kendini belgeleyen hale getirmek için fonksiyon parametreleri ve dönüş tipleri için açık tipler kullanın.

let greet = (name: string): string => `Hello ${name}!`;
greet("Alice");
// greet(42);

let username = "alice";
let score = 100;
let flages = [true, false, true];
let add = (a: number, b: number) => a + b;

const user = {
    name: "Alice",
    age: 30,
    isAdmin: true
};
console.log(user.name);
// console.log(user.email);
let data = JSON.parse('{ "name": "Alice", "age": 30 }');
let something;
something = "Hello";
something = 42;
