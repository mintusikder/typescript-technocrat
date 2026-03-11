// polymorphism.t

class Person {
  getSleep() {
    console.log(`Person is sleeping for 5 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`Student is studying for 6 hours`);
  }
}

class NextLevelStudent extends Person {
  getSleep() {
    console.log(
      `NextLevelStudent is doing research for 8 hours`,
    );
  }
}

const getSleepInfo = (person: Person) => {
  person.getSleep();
}

const Person1 = new Person();
const Student1 = new Student();
const NextLevelStudent1 = new NextLevelStudent();

getSleepInfo(Student1);
// getSleepInfo(Student1);
// getSleepInfo(NextLevelStudent1);

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const getArea = (shape: Shape) => {
    console.log(`Area: ${shape.getArea()}`);
}

const circle = new Circle(2);
getArea(circle);