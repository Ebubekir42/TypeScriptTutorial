// Template Literal Types

type Color = "red" | "green" | "blue";

type HexColor<T extends Color> = `#${string}`;

let myColor: HexColor<"blue"> = "#0000FF";

// console.log(myColor);

// Index Signature Labels

type DynamicObject = { [key: `dynamic_${string}`]: string };

let obj: DynamicObject = { dynamic_key: "value" }

// console.log(obj);
// console.log(obj.dynamic_key);


