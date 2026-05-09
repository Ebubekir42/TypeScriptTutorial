// Basic Namespace Syntax
// Creating and Using Namespaces

namespace Validation {
    export interface StringValidator {
        isValid: (s: string) => boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;

    export class LettersValidator implements StringValidator {
        isValid = (s: string) => lettersRegexp.test(s);
    }

    export class ZipCodeValidator implements StringValidator {
        isValid = (s: string) => /^[0-9]+$/.test(s) && s.length === 5;
    }
}

let letterValidator = new Validation.LettersValidator();
let zipCodeValidator = new Validation.ZipCodeValidator();

console.log(letterValidator.isValid('hello'));
console.log(letterValidator.isValid('hello123'));

console.log(zipCodeValidator.isValid('12345'));
console.log(zipCodeValidator.isValid('1234'));


// Advanced Namespace Features
// Nested Namespaces

namespace App {
    export namespace Utils {
        export const log = (msg: string): void => {
            console.log(`[LOG]: ${msg}`);
        }

        export const error = (msg: string): void => {
            console.log(`[ERROR]: ${msg}`);
        }
    }

    export namespace Models {
        export interface User {
            id: number;
            name: string;
            email: string;
        }

        export class UserService {
            getUser(id: number): User {
                return { id, name: 'John Doe', email: 'john@example.com' };
            }
        }
    }
}

App.Utils.log('Application starting');


// Advanced Namespace Features
// Namespace Aliases

namespace VeryLongNamespace {
    export namespace DeeplyNested {
        export namespace Components {
            export class Button {
                display = () => {
                    console.log('Button displayed');
                }
            }

            export class TextField {
                display = () => {
                    console.log('TextField displayed');
                }
            }
        }
    }
}

const button1 = new VeryLongNamespace.DeeplyNested.Components.Button();
button1.display();

import Components = VeryLongNamespace.DeeplyNested.Components;
const button2 = new Components.Button();
button2.display();

import Button = VeryLongNamespace.DeeplyNested.Components.Button;
const button3 = new Button();
button3.display();


// Advanced Namespace Patterns

declare namespace Express {
    interface Request {
        user?: { id: number, name: string };
    }
    interface Response {
        json: (data: any) => void
    }
}

declare namespace Express {
    interface Request {
        requestTime?: number;
        log: (message: string) => void;
    }
    interface UserSession {
        userId: number;
        expires: Date;
    }
}

// const app = express();

// app.use((req: Express.Request, res: Express.Response, next) => {
//     // Augmented properties and methods are available
//     req.requestTime = Date.now();
//     req.log('Request started');
//     next();
// });


// Namespaces with Generics
namespace DataStorage {
    export interface Repository<T> {
        getAll: () => T[];
        getById: (id: number) => T | undefined;
        add: (item: T) => void;
        update: (id: number, item: T) => boolean;
        delete: (id: number) => boolean;
    }

    export class InMemoryRepository<T> implements Repository<T> {
        private items: T[] = [];

        getAll = (): T[] => [...this.items];
        getById = (id: number): T | undefined => this.items[id];
        add = (item: T): void => { this.items.push(item); }
        update = (id: number, item: T): boolean => {
            if (id >= 0 && id < this.items.length) {
                this.items[id] = item;
                return true;
            }
            return false;
        }
        delete = (id: number): boolean => {
            if (id >= 0 && id < this.items.length) {
                this.items.splice(id, 1);
                return true;
            }
            return false;
        }
    }
}

interface User {
    id: number;
    name: string;
    email: string;
}
const userRepo: DataStorage.InMemoryRepository<User> = new DataStorage.InMemoryRepository<User>();
userRepo.add({ id: 1, name: 'John Doe', email: 'john@example.com' });
const allUsers: User[] = userRepo.getAll();