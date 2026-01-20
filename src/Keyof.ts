interface Person {
    name: string;
    age: number;
}
const printPersonProperty = (person: Person, property: keyof Person) => {
    console.log(`Printing person property ${property}: ${person[property]}`);
}
let person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name");

type StringMap = { [key: string]: unknown };
const createStringPair = (property: keyof StringMap, value: string): StringMap =>
    ({ [property]: value });
console.log(createStringPair("Ali", "Bob"));