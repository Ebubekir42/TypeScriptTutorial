let value: string | undefined | null = null;
value = "hello";
value = undefined;

interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}
const printYardSize = (house: House) => {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) console.log("No Yard")
    else console.log(`Yard is ${yardSize} sqft`);
}
let home: House = {
    sqft: 500,
    yard: { sqft: 5 }
};
printYardSize(home);

const printMileage = (mileage: number | null | undefined) => {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
printMileage(null);
printMileage(undefined);
printMileage(0);

const getValue = (): string | undefined => undefined;
let value2 = getValue();
console.log(`value length: ${value2!.length}`);

let array: number[] = [1, 2, 3];
let value3 = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`