// Function Return Type Inference
const greet = (name: string) => `Hello, ${name}`;
const add = (a: number, b: number) => a + b;
const getValue = (key: string) => {
    return key === 'name' ? 'Alice' : 42;
};
let greeting = greet('Bob');
let sum = add(5, 3);
let value = getValue('age');


// Contextual Typing
const names = ["Alice", "Bob", "Charlie"];

names.forEach(name => { console.log(name.toUpperCase()); });

const nameLengths = names.map(name => name.length);


// Type Inference in Object Literals

const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    active: true,
    details: {
        age: 30,
        address: {
            city: "New York",
            country: "USA"
        }
    }
};

console.log(user.name.toUpperCase());
console.log(user.details.age.toFixed(0));
console.log(user.details.address.city.toLowerCase());
// console.log(user.age);


// Advanced Patterns
// Const Assertions

let name = "Alice";

const nameConst = "Alice" as const;

const user2 = {
    id: 1,
    name: "Alice",
    roles: ["admin", "user"] as const
} as const;
// user2.name = "Bob";


// Advanced Patterns
// Type Guards and Control Flow Analysis

const processValue = (value: string | number): void => {
    if (typeof value === 'string')
        console.log(value.toUpperCase());
    else
        console.log(value.toFixed(0));
}

interface Circle {
    kind: 'circle';
    radius: number;
}
interface Square {
    kind: 'square';
    size: number;
}
type Shape = Circle | Square;

const area = (shape: Shape): number => {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.size ** 2;
    }
}

const emptyArray: string[] = [];
const configOptions: Record<string, unknown> = {};
