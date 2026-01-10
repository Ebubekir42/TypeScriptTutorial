let x: unknown = "Hello";
console.log((x as string).length);

x = 4;
console.log((x as number).toString());
// let y = (4 as string).length;

x = "Hello";
console.log((<string>x).length);

// let y = "Hello";
// console.log(((y as unknown) as number).length);