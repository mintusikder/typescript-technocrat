type RichePersonVehicle = {
  car: string;
  house: string;
  watch: string;
};

type MyVehicle1 = "car" | "house" | "watch";
type MyVehicle2 = keyof RichePersonVehicle; 

const myVehicle1: MyVehicle1 = "car";
const myVehicle2: MyVehicle2 = "ship";

type User = {
    name: string;
    age: number;
    address: {
        street: string;
        zipCode: string;
    }
}

const user: User = {
    name: "Alice",
    age: 30,
    address:{
        street: "123 Main St",
        zipCode: "10001"
    }
}

// const myId= user["name"];
// const myCity = user["city"];
// const myStreet = user["address"];

// console.log({myId, myCity, myStreet});

const getPropertyFormObj = <T>(obj: T, key: keyof T) => {
    return obj[key];
} 

const product ={
    name: "Laptop",
    price: 999,
    category: "Electronics"
}

const result1 = getPropertyFormObj(product, "name");
console.log(result1);
const result = getPropertyFormObj(user, "name");
console.log(result);
