// String Literal Types

let direction: 'north' | 'east' | 'south' | 'west';
direction = 'north';
direction = 'east';
// direction = 'up';

const move = (direction: 'north' | 'east' | 'south' | 'west') => {
    console.log(`Moving ${direction}`);
}
move('east');
// move('up');


// Numeric Literal Types

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 1;
diceRoll = 3;
// diceRoll = 7;
const rollDice = (): 1 | 2 | 3 | 4 | 5 | 6 =>
    Math.floor(Math.random() * 6) + 1 as 1 | 2 | 3 | 4 | 5 | 6;

console.log(rollDice());


// Boolean Literal Types
type YesOnly = true;

const alwaysSucceed = (): true => true;

type SuccessFlag = true | 'success' | 1;
type FailureFlag = false | 'failure' | 0;

const processResult = (result: SuccessFlag | FailureFlag) => {
    if (result === true || result === 'success' || result === 1)
        console.log("Operation succeeded");
    else
        console.log("Operation failed");
}
processResult(true);
processResult(0)
processResult('success');


// Literal Types with Objects

type HTTPSuccess = {
    status: 200 | 201 | 204;
    statusText: "OK" | "Created" | "No Content";
    data: any;
};

type HTTPError = {
    status: 400 | 401 | 403 | 404 | 500;
    statusText: "Bad Request" | "Unauthorized" | "Forbidden" | "Not Found" | "Internal Server Error";
    error: string;
};

type HTTPResponse = HTTPSuccess | HTTPError;

const handleResponse = (response: HTTPResponse) => {
    if (response.status == 200 || response.status == 201 || response.status == 204) {
        console.log(`Success: ${response.statusText}`);
        console.log(response.data);
    } else if (response.status == 400 || response.status == 401 || response.status == 403 || response.status == 404 || response.status == 500) {
        console.log(`Error ${response.status}: ${response.statusText}`);
        console.log(`Message: ${response.error}`);
    }
}
const successResponse: HTTPSuccess = {
    status: 200,
    statusText: "OK",
    data: { username: "john_doe", email: "john@example.com" }
};

const errorResponse: HTTPError = {
    status: 404,
    statusText: "Not Found",
    error: "User not found in database"
};
handleResponse(successResponse);
handleResponse(errorResponse);


// Template Literal Types

type Direction = "north" | "south" | "east" | "west";
type Distance = "1km" | "5km" | "10km";
type DirectionAndSistance = `${Direction}-${Distance}`;

let route: DirectionAndSistance;
route = 'east-10km';
route = 'north-1km';
// route = 'north-2km';

type EventType = "click" | "hover" | "scroll";
type EventTarget = "button" | "link" | "div";
type EventName = `on${Capitalize<EventType>}${Capitalize<EventTarget>}`;

let event: EventName = 'onClickButton';

type User = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
};

type GetterName<T> = `get${Capitalize<string & keyof T>}`;
type UserGetters = {
    [K in keyof User as GetterName<User>]: () => User[K];
};

type ExtractRouteParams<T extends string> =
    T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractRouteParams<Rest>
    : T extends `${string}:${infer Param}`
    ? Param : never;

type Params = ExtractRouteParams<"/users/:userId/posts/:postId">;

type CssUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw';
type CssValue = `${number}${CssUnit}`;
let width: CssValue = '12px';

type ApiVersion = 'v1' | 'v2' | 'v3';
type Endpoint = 'users' | 'products' | 'orders';
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type ApiUrl = `https://api.example.com/${ApiVersion}/${Endpoint}`;

type Table = 'users' | 'products' | 'orders';
type Column<T extends Table> =
    T extends 'users' ? 'id' | 'name' | 'email' | 'created_at' :
    T extends 'products' ? 'id' | 'name' | 'price' | 'in_stock' :
    T extends 'orders' ? 'id' | 'user_id' | 'total' | 'status' : never;

type WhereCondition<T extends Table> = {
    [K in Column<T>]?: {
        equals?: any;
        notEquals?: any;
        in?: any[];
    };
};

const query = <T extends Table>(table: T, where?: WhereCondition<T>
): `SELECT * FROM ${T}${string}` => `SELECT * FROM ${table}` as const;

const userQuery = query('users', {
    name: { equals: 'John' },
    created_at: { in: ['2023-01-01', '2023-12-31'] }
});