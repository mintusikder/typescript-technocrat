const createArrayWithGeneric = <T>(value: T): T[] => {
  return [value];
};

const stringArray = createArrayWithGeneric<string>("Hello");
const numberArray = createArrayWithGeneric<number>(42);
const booleanArray = createArrayWithGeneric<boolean>(true);
const objectArray = createArrayWithGeneric<{ id: number; name: string }>({
  id: 1,
  name: "John Doe",
});

//tuple

const createTupleWithGeneric = <T, U>(value1: T, value2: U): [T, U] => {
  return [value1, value2];
};

const stringNumberTuple = createTupleWithGeneric<string, number>("Hello", 42);

const addStudentCourse = <T>(studentInfo: T) => {
  return {
    course: "TypeScript",
    ...studentInfo,
  };
};

const studen1 = addStudentCourse({ name: "Alice", age: 20 });
const studen2 = addStudentCourse({ name: "Bob", age: 22, isCar: true });


console.log(studen2);