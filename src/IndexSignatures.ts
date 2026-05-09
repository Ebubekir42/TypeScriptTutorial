// Basic Index Signatures
// String Index Signatures

interface StringDictionary {
    [key: string]: string;
}

const names: StringDictionary = {
    firstName: 'Alice',
    lastName: 'Smitch',
    100: 'One Hundred'
};

console.log(names["firstName"]);
console.log(names['lastName']);
console.log(names["100"]);

names.age = "30";

// Basic Index Signatures
// Number Index Signatures

interface NumberDictionary {
    [key: number]: any;
}

const scores: NumberDictionary = {
    0: 'Zero',
    1: 100,
    2: true
};

console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);

scores[3] = { passed: true };


// Advanced Index Signature Patterns
// Mixed Property Types

interface UserInfo {
    name: string;
    age: number;
    [key: string]: number | string;
}

const user: UserInfo = {
    name: 'Alice',
    age: 30,
    address: '123 Main St',
    zipCode: 12345
};

// Advanced Index Signature Patterns
// ReadOnly Index Signatures

interface ReadOnlyStringArray {
    readonly [index: number]: string;
}

const names2: ReadOnlyStringArray = ['Alice', 'Bob', 'Charlie'];
console.log(names2[0]);
// names2[0] = 'Andrew'; Error

// Real-World Examples
// API Response Handling

interface ApiResponse<T> {
    data: {
        [resourceType: string]: T[];
    };
    meta: {
        page: number;
        total: number;
        [key: string]: any;
    };
}

interface User {
    id: number;
    name: string;
    email: string;
}

const apiResponse: ApiResponse<User> = {
    data: {
        users: [
            { id: 1, name: "Alice", email: "alice@example.com" },
            { id: 2, name: "Bob", email: "bob@example.com" }
        ]
    },
    meta: {
        page: 1,
        total: 2,
        timestamp: '2023-01-01T00:00:00Z'
    }
};

const users = apiResponse.data.users;
console.log(users ? users[0]?.name : "Empty users");


// Common Pitfalls
// Property Name Conflicts

interface ConflictingTypes {
    [key: string]: number;
    // name: string // Error
}
interface FixedTypes {
    [key: string]: number | string;
    name: string;
    age: number;
}