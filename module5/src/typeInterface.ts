type User = {
  name: string;
  age: number;
  email: string;
};
// interface Use object type = array, function, object
interface IUser {
    name: string;
    age: number;
    email: string;
}

type Role = {
    role : "admin" | "user" | "guest";
}

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
    role : "admin" | "user" | "guest";
}

const user1: UserWithRole = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  role: "admin"
};
const user2: IUserWithRole = {
  name: "Jane Smith",
  age: 25,
  email: "jane.smith@example.com",
  role: "user"
};


//function type 

type add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number;
}

const add : IAdd = (num1: number, num2: number) => num1 + num2;


type FriendsList = string[];

interface IFriends {
    [index: number]: string;
}
const friends: IFriends = ["Alice", "Bob", "Charlie"];



