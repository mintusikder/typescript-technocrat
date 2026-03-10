//opp - class 

// class Animal {
//     name: string; 
//     species: string;
//     sound : string;

//     constructor(name: string, species: string, sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     } 

//     makeSound(){
//         console.log(`${this.name} says ${this.sound}`);
//     }
// }

// paramiter properties - shortcut for defining and initializing properties in the constructor

class Animal {
    // name: string; 
    // species: string;
    // sound : string;

    constructor(public name: string, public species: string, public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    } 

    makeSound(){
        console.log(`${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("Buddy", "Dog", "Woof");
const cat = new Animal("Whiskers", "Cat", "Meow");
dog.makeSound();
cat.makeSound();

