// typeof

const formatValue = (value: string | number): string => {
    if (typeof value === 'string')
        return value.trim().toUpperCase();
    else
        return value.toFixed(2);
}

// console.log(formatValue('  hello    '));
// console.log(formatValue(42.1234));

// instanceof

class Bird {
    fly() {
        console.log('Flying...');
    }
}

class Fish {
    swim() {
        console.log('Swinmming...');
    }
}

const move = (animal: Bird | Fish): void => {
    if (animal instanceof Bird)
        animal.fly();
    else
        animal.swim();
}
const bird: Bird = new Bird();
const fish: Fish = new Fish();
// move(bird);
// move(fish);


// User-Defined Type Guards
// Type Predicate Functions
interface Car {
    make: string;
    model: string;
    year: number;
}

interface MotorCycle {
    make: string;
    model: string;
    year: number;
    type: "sport" | "cruiser";
}

const isCar = (vehicle: Car | MotorCycle): vehicle is Car => {
    return (vehicle as MotorCycle).type === undefined;
}

const displayVehicleInfo = (vehicle: Car | MotorCycle) => {
    console.log(`Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);

    if (isCar(vehicle)) {
        console.log('This is a car');
    }
    else {
        // console.log(`This is a ${vehicle.type} motorcycle`);
    }
}


// Discriminated Unions
// Basic Discriminated Union
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

const calculateArea = (shape: Shape): number => {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}

const circle: Shape = {
    kind: 'circle',
    radius: 5
};
const square: Square = {
    kind: 'square',
    sideLength: 4
};

// console.log(`Circle area: ${calculateArea(circle).toFixed(2)}`);
// console.log(`Square area: ${calculateArea(square)}`);


// in
interface Dog {
    bark(): void;
}
interface Cat {
    meow(): void;
}

const makeSound = (animal: Dog | Cat): void => {
    if ('bark' in animal)
        animal.bark();
    else
        animal.meow();
}
const dog: Dog = {
    bark() {
        console.log("Woof woof!");
    }
};

const cat: Cat = {
    meow() {
        console.log("Meow!");
    }
};

// makeSound(dog);
// makeSound(cat);



// Type Assertion Functions
// Assertion Functions
const assertIsString = (value: unknown) => {
    if (typeof value !== 'string')
        throw new Error('Value is not a string');
}
const assert = (condition: boolean, message: string) => {
    if (!condition)
        throw new Error(message);
}
try {
    const input = 2;
    assertIsString(input);
    // console.log(input.toUpperCase());
} catch (error) {
    if (error instanceof Error)
        console.log('string error:', error.message);
}

try {
    const x = "21";
    assert(typeof x === 'number', 'Value must be a number');
} catch (error) {
    if (error instanceof Error) {
        console.log('number error:', error.message);
    }
}


