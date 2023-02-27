interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 35;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

// An interface is a way to define the structure and types on an object.  This can also be used in classes by using the implements keyword. => class Person implements Greetable {}...

let user1: Greetable;

user1 = new Person('Cory');

// user1 = {
//   name: 'Cory',
//   //   age: 35,
//   greet(phrase) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

user1.greet('Hi there - I am');
console.log(user1);
