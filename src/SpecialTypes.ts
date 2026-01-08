let v: any = true;
v = "test";

let w: unknown = 1;
w = "test";

let processValue = (value: unknown) => {
    if (typeof value === "string")
        console.log(value.toUpperCase());
    else if (Array.isArray(value))
        console.log(value.length);
}
processValue("test");
processValue([1, 2, 3, 4]);

let throwError = (message: string): never => {
    throw new Error(message);
}
// throwError("test");

type Shape = "Circle" | "Square" | "Triangle";
let getArea = (shape: Shape): number => {
    switch (shape) {
        case "Circle":
            return 1;
        case "Square":
            return 2;
        case "Triangle":
            return 3;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
// let x: never = true;

let y: undefined = undefined;
let z: null = null;
console.log(typeof y);
console.log(typeof z);

let greet = (name?: string) => `Hello, ${name ?? 'stranger'}`;
// let greet = (name?: string) => `Hello, ${name || 'stranger'}`;
console.log(greet());

interface User {
    name: string;
    age?: number;
    address?: string;
}
// let user : User | undefined = {name: "Test"};
// let user : User | undefined;
let user: User | undefined = { address: "Turkey", name: "Test" };
console.log(user?.address?.length || 7);