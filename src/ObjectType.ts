const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
car.type = "Ford";
// car.type = 2;

const car2: { type: string, mileage?: number } = {
    type: "Toyota",
};
car2.mileage = 2;

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
console.log(nameAgeMap);