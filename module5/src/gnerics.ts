type GenericArray<T> = Array<T>;
const friends: GenericArray<string> = ["Alice", "Bob", "Charlie"];
const numbers: GenericArray<number> = [1, 2, 3, 4, 5];

type User = { name: string; age: number; email: string }

const userList: GenericArray<User> = [
  {
    name: "John Doe",
    age: 30,
    email: "mintu@gmail.com",
  },
  {
    name: "Jane Smith",
    age: 25,
    email: "jane.smith@example.com",
  },
];

const booleanArray: GenericArray<boolean> = [true, false, true, false];

type Coordinatse<T> = [T, T];

const point: Coordinatse<string> = ["10", "20"];
const point2: Coordinatse<number> = [10, 20];
