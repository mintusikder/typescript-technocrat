// type guard

// in typeOf
type TypeGuard = string | number;

const add = (num1: TypeGuard, num2: TypeGuard) => {
 if(typeof num1 === "number" && typeof num2 === "number") {
  return num1 + num2;
 }else{
    return num1.toString() + num2.toString();
 }
}

add(5, 10); // 15


type normalUser ={
    name: string,
}

type adminUser = {
    name: string,
    role: "admin"
}

const getUser = (user: normalUser | adminUser)  =>{
if("role" in user){
    console.log(`${user.name} is an role of ${user.role}`);
}else{
    console.log(`${user.name} is a normal user`);
}
}
getUser({name: "Normal", role: "admin"}); 
