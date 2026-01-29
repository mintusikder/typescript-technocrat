//function - arrow function | normal function 

function addNormal(a: number, b: number): number {
  return a + b;
} 

const addArrow = (a: number, b: number) : number =>{
    return a + b;
}
const sum = addArrow(5, 10); 
console.log("Sum:", sum);

//object = function = method 

const poorUser ={
    name: "Mintu Sikder",
    balance: 5000,
    addBalance(money: number): number {
        return this.balance + money;
    }
}

poorUser.addBalance(2000);
console.log("Updated Balance:", poorUser.addBalance(2000));

// call back function 

const arr : number[] = [2,4,6,8,10]; 
const newArr = arr.map((item: number) : number => item * 2);
console.log("New Array:", newArr);