class Person {
 name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numberOfHours: number) {
    console.log(`Mr ${this.name} is sleeping for ${numberOfHours} hours`);
  }  
}

class Student extends Person {
  rollNo : number 

  constructor(name: string, age: number, address: string,rollNo : number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}

const student1 = new Student("Alice", 20, "123 Main St", 12345);
student1.getSleep(15);

//teacher

class Teacher extends Person {
  subject: string;
  constructor(name: string, age: number, subject: string) {
    super(name, age, "");
    this.subject = subject;
  }
}

const teacher1 = new Teacher("Mr Smith", 40, "Mathematics");
teacher1.getSleep(8);
