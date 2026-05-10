// Interface Merging

interface Person {
    name: string;
    age: number;
}

interface Person {
    address: string;
    email: string;
}

const person: Person = {
    name: "John",
    age: 30,
    address: "123 Main St",
    email: "john@example.com"
};

console.log(person);


// Function Overloads with Merging

const processValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string')
        return value.toUpperCase();
    if (typeof value === 'number')
        return value * 2;
    return !value;
}

console.log(processValue('hello'));
console.log(processValue(10));
console.log(processValue(true));


// Namespace Merging

namespace Validation {
    export interface StringValidator {
        isValid: (s: string) => boolean;
    }
}

namespace Validation {
    export interface NumberValidator {
        isValid: (n: number) => boolean;
    }

    export class ZipColdeValidator implements StringValidator {
        isValid = (s: string) => s.length === 5 && /^\d+$/.test(s);
    }
}

const zipValidator = new Validation.ZipColdeValidator();
console.log(zipValidator.isValid("12345"));
console.log(zipValidator.isValid("1234"));
console.log(zipValidator.isValid("abcde"));


// Class and Interface Merging

interface Cart {
    calculateTotal: () => number;
}

class Cart {
    items: { name: string, price: number }[] = [];

    addItem = (name: string, price: number): void => {
        this.items.push({ name, price });
    }
    calculateTotal = (): number => this.items.reduce((sum, item) => sum + item.price, 0);
}

const cart = new Cart();
cart.addItem('Book', 15.99);
cart.addItem('Coffee Mug', 8.99);
console.log(`Total: $${cart.calculateTotal().toFixed(2)}`);


// Enum Merging

enum Direction {
    North,
    South
}

enum Direction {
    East = 2,
    West = 3
}

console.log(Direction.North); // 0
console.log(Direction.South); // 1
console.log(Direction.East); // 2
console.log(Direction.West); // 3

console.log(Direction[0]);
console.log(Direction[2]);


// Module Augmentation

declare namespace LibraryModule {
    export interface User {
        id: number;
        name: string;
    }
    export const getUser: (id: number) => User;
}

declare namespace LibraryModule {
    export interface UserPreferences {
        theme: string;
        notifications: boolean;
    }
    export interface User {
        preferences?: UserPreferences;
    }
    export const getUserPreferences: (userId: number) => UserPreferences;
}

const user = LibraryModule.getUser(123);
console.log(user.preferences?.theme);

const prefs = LibraryModule.getUserPreferences(123);
console.log(prefs.notifications);