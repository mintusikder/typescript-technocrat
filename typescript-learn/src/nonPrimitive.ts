// array , object , function , date , regexp , map , set , weakmap , weakset , symbol

// ts - tuple

let bazarList: string[] = ["apple", "banana", "orange"];

let mixer: (string | number | boolean)[] = ["apple", 5, true];

mixer.push(23);

//tuple

let person: [string, string] = ["mintu", "sikder"];

let person2: [string, number, boolean] = ["sikder", 30, true];

// object

// const user: {
//   organization: "Ms academy"; // value difined type
//   firstName: string;
//   middleName?: string; //optional property
//   lastName: string;
//   isMarried: boolean;
// } = {
//   firstName: "Mintu",
//   lastName: "Sikder",
//   isMarried: false,
//   organization: "Ms academy",
// };
// user.organization = "ABC Ltd";



const user: {
  readonly organization: string; // access modefier
  firstName: string;
  middleName?: string; //optional property
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "Mintu",
  lastName: "Sikder",
  isMarried: false,
  organization: "Ms academy",
};
console.log(user);