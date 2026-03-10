class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    getSleep(numberOfHours: number) {
        console.log(`${this.name} is sleeping for ${numberOfHours} hours`);
    }
}

const Student = class extends Person {
    constructor(name: string) {
            super(name);
    }
    doStudy(numberOfHours: number) {
        console.log(`${this.name} is studying for ${numberOfHours} hours`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }
    doTeach(numberOfHours: number) {
        console.log(`${this.name} is teaching for ${numberOfHours} hours`);
    }
}
//function guard 

const isStudent = (user: Person)=> {
    return user instanceof Student;
}

const isTeacher = (user: Person): user is Teacher => {
    return user instanceof Teacher;
}

const userInfo =(user: Person) => {
    if(isStudent(user)){
        user.doStudy(5);
    } else if(isTeacher(user)){
        user.doTeach(3);
    }else{
      user.getSleep(8);
    }
}

const student1 = new Student("Alice Student");
const teacher1 = new Teacher("Mr Smith Teacher");
const person1 = new Person("Mr Smith Teacher");
userInfo(student1);
userInfo(teacher1);
userInfo(person1);