// Basic Mapped Type
interface Person {
    name: string;
    age: number;
    email: string;
}

type PartialPerson = { [P in keyof Person]?: Person[P] }
const partialPerson: PartialPerson = { name: "John" };

type ReadonlyPerson = { readonly [P in keyof Person]: Person[P] }
const readonlyPerson: ReadonlyPerson = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
// readonlyPerson.age = 31; Error



// Built-in Mapped Types
// Standart Library Utilities

interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;
type UserCredentials = Pick<User, "email" | "id">;
type PublicUser = Omit<User, "id" | "isAdmin">;
type UserRoles = Record<"admin" | "user" | "guest", string>;



// Creating Custom Mapped Types
// Basic Custom Mappers
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

type StringifyProperties<T> = { [K in keyof T]: string };

type StringProduct = StringifyProperties<Product>;

type Validator<T> = {
    [K in keyof T]: (value: T[K]) => boolean
};

const productValidator: Validator<Product> = {
    id: (v) => v > 0,
    name: (v) => v.length > 0,
    price: (v) => v >= 0,
    inStock: (v) => typeof v === 'boolean'
};
// console.log(productValidator.id(5));


// Modifying Property Modifiers
// Adding and Removing Modifiers

interface Configuration {
    readonly apiKey: string;
    readonly apiUrl: string;
    timeout?: number;
    retries?: number;
}

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

type MutableConfig = Mutable<Configuration>;

type RequiredProps<T> = {
    [K in keyof T]-?: T[K];
};

type RequiredConfig = RequiredProps<Configuration>;


// Advanced Mapped Types
// Combining with Conditional Types
interface ApiResponse {
    data: unknown;
    status: number;
    message: string;
    timestamp: number;
}

type FormattedResponse<T> = {
    [P in keyof T]: T[P] extends number ? string : T[P];
};
type FormattedApiResponse = FormattedResponse<ApiResponse>;

type StringPropsOnly<T> = {
    [P in keyof T as T[P] extends string ? P : never]: T[P];
};
type ApiResponseStringProps = StringPropsOnly<ApiResponse>;