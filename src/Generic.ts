const createPair = <S, T>(v1: S, v2: T): [S, T] => [v1, v2];
console.log(createPair<string, number>("hello", 42));

class NamedValue<T = string> {
    private _value: T | undefined;
    constructor(private name: string) { }
    public setValue = (value: T): void => { this._value = value; }
    public getValue = (): T | undefined => this._value;
    public toString = () => `${this.name}: ${this._value}`;
}
let value = new NamedValue<number>("myNumber");
value.setValue(10);
console.log(value.getValue());
console.log(value.toString());

let value2 = new NamedValue("myString");
value2.setValue("Hello");
console.log(value2.getValue());
console.log(value2.toString());

type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };

interface IWrapped<T> {
    getValue: () => T;
}

const createLoggedPair = <S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] => [v1, v2];
console.log(createLoggedPair<string, number>("Hello", 6));