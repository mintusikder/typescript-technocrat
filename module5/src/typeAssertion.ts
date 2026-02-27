const kgToGm = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Convarting ${Number(value) * 1000} grams`;
  }
};
const result = kgToGm(2) as number;
const result1 = kgToGm("2 Kg") as string;
console.log(result); // 2000
console.log(result1); // Convarting 2000 grams


type CustomError = {
  message: string;
  code: number;
};

try{

} catch (error) {
  const customError = error as CustomError;
  console.log(customError.message);
  console.log(customError.code);
}