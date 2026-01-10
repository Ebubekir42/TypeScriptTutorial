type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

let carYear: CarYear = 2001;
let carType: CarType = "Toyota";
let carModel: CarModel = "Corolla";
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

type Animal2 = { name: string };
type Bear = Animal2 & { honey: boolean };
const bear: Bear = { honey: true, name: "Winnie" };
type Status = "success" | "error";
let response: Status = "error";

interface Rectangle {
    height: number,
    width: number
}
interface ColoredRectangle extends Rectangle {
    color: string
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

interface Animal {
    name: string;
}
interface Animal {
    age: number;
}
const dog: Animal = {
    age: 5,
    name: "Fido"
};


