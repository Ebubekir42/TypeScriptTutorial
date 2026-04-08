// Basic Conditional Type Syntax

type IsString<T> = T extends string ? true : false;

type Result1 = IsString<string>;
type Result2 = IsString<number>;
type Result3 = IsString<"hello">;
let a: IsString<string>;


// Conditional Types With Unions
// Distributive Conditional Types

type ToArray<T> = T extends any ? T[] : never;

type StringOrNumberArray = ToArray<string | number>;
type ExtractString<T> = T extends string ? T : never;
type StringsOnly = ExtractString<string | number | boolean | "hello">;


// Type Inference with infer

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
const greet = () => "Hello world!";
const getNumber = () => 42;
type GreetReturnType = ReturnType<typeof greet>;
type NumberReturnType = ReturnType<typeof getNumber>;

type ElementType<T> = T extends (infer U)[] ? U : never;
type NumberArrayElement = ElementType<number[]>;
type StringArrayElement = ElementType<string[]>;


// Built-in Conditional Types
// Standart Library Utilities
type OnlyStrings = Extract<string | number | boolean, string>;
type NoStrings = Exclude<string | number | boolean, string>;
type NotNull = NonNullable<string | null | undefined>;
type Params = Parameters<(a: string[], b: number) => void>;
type Return = ReturnType<() => string>;



// Advanced Patterns and Techniques
// Recursive Conditional Types
type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;
type A = UnwrapPromise<Promise<string>>;
type B = UnwrapPromise<Promise<Promise<number>>>;
type C = UnwrapPromise<boolean>;

// Advanced Patterns and Techniques
// Type-Level If-Else Chains
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T0 = TypeName<string>; // "string"
type T1 = TypeName<42>; // "number"
type T2 = TypeName<true>; // "boolean"
type T3 = TypeName<() => void>; // "function"
type T4 = TypeName<Date[]>; // "object"

const processValue = <T>(value: T): T extends string
    ? string
    : T extends number
    ? number
    : T extends boolean
    ? boolean
    : never => {
    if (typeof value === 'string')
        return value.toUpperCase() as any;
    else if (typeof value === 'number')
        return (value * 2) as any;
    else if (typeof value === 'boolean')
        return (!value) as any;
    else
        throw new Error("Unsupported type");
}
const stringResult = processValue("hello");
const numberResult = processValue(10);
const boolResult = processValue(true);
