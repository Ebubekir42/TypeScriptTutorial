// Partial
interface Point {
    x: number;
    y: number;
}
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

// Required
interface Car {
    make: string;
    model: string;
    mileage?: number;
}
let myCar: Required<Car> = {
    make: "Ford",
    model: "Focus",
    mileage: 12000
};

// Record
const nameAgeMap: Record<string, number> = {
    "Alice": 21,
    "Bob": 45
};

// Omit
interface Person {
    name: string;
    age: number;
    location?: string;
}
const bob: Omit<Person, "age" | "location"> = {
    name: "Bob"
};

// Pick
const bob2: Pick<Person, "name"> = {
    name: "Bob"
};

// Exclude
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true;

// ReturnType
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
};

// Parameters
type PointPrinter = (p: { x: number; y: number }) => void;
const point2: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20
};

// Readonly
interface Person2 {
    name: string;
    age: number;
}
const person: Readonly<Person2> = {
    name: "Dylan",
    age: 35
};
// person.name = "Maria";