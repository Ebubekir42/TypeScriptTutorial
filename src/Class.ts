// class Person {
//     name: string | undefined;
// }

// class Person {
//     private name : string;
//     public constructor(name: string){
//         this.name = name;
//     }
//     public getName = () : string => this.name;
// }
// class Person {
//     public constructor(private name: string) { }
//     public getName = (): string => this.name;
// }
class Person {
    private readonly name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public getName = (): string => this.name;
}

// const person = new Person();
// person.name = "Jane";
// console.log(person);
const person = new Person("Jane");
console.log(person.getName());

interface Shape {
    getArea: () => number;
}
class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { }
    public getArea = (): number => this.height * this.width;
    public toString = (): string => `Rectangle[width=${this.width}, height=${this.height}]`;
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea());

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }
    public override toString = (): string => `Square[width=${this.width}]`;
}
const square: Rectangle = new Square(15);
console.log(square.getArea());
console.log(square.toString());

abstract class Polygon {
    public abstract getArea: () => number;
    public toString = (): string => `Polygon[area=${this.getArea()}]`;
}
class Rectangle2 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }
    public override getArea = (): number => this.width * this.height;
}
const rectangle2 = new Rectangle2(15, 20);
console.log(rectangle2.getArea());