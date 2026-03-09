const arrayOfNumber: number[] = [1, 2, 3, 4, 5];

const arrayOfString: string[] = ["Hello", "World", "TypeScript"];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((num) =>
  num.toString(),
);
console.log(arrayOfStringUsingMap);

const user ={
    id: 424
}

user

type areaOfNumbers = {
  width: number;
  height: number;
};
type hight = areaOfNumbers["height"];

// type areaOfString = {
//   width: string;
//   height: string;
// };

type areaOfString =  {
    [key in keyof areaOfNumbers]: string
}


