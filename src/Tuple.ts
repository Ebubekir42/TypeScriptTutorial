let ourTuple: [number, boolean, string];
ourTuple = [1, false, "God"];
// ourTuple = [false, 1, "God"];
ourTuple.push(false);

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, "Real"];
// ourReadonlyTuple.push(false);
const graph: [x: number, y: number] = [55, 44];
const graph2: [number, number] = [55, 44];
const [x, y] = graph2;