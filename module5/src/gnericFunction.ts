type Student = {
  name: string;
  age: number;
};

const addStudentCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "TypeScript",
    ...studentInfo,
  };
};

const studen1 = addStudentCourse({ name: "Alice", age: 20 });
const studen2 = addStudentCourse({ name: "Bob", age: 22, isCar: true });
const studen3 = addStudentCourse({ name: "Charlie", age: 25, hasWatch: true });

console.log(studen3);
