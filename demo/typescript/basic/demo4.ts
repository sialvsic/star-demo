abstract class Animal {
  abstract makeSound(): void;
  move(): void {
      console.log('roaming the earch...');
  }
}
// new Animal();

class Monkey extends Animal {
  private name: string;
  constructor() { super(); }
  // makeSound() { }
  move() { }
  // getName() {
  //   console.log(this.name)
  // }
}

// new Monkey().name;

// class OtherMonkey extends Monkey {
//   constructor(){super()}
//   makeSound() { }
//   getName() {
//     console.log(this.name)
//   }
// }

// new OtherMonkey().name;

// When a member is marked private, it cannot be accessed from outside of its containing class
// When a member is marked protected,it  can be accessed within deriving class.
