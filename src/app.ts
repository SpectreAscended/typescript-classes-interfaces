interface Named {
  readonly name?: string;
  outputName?: string;
  // myMethod?(a:string): string
}

interface Greetable extends Named {
  // readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 35;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log('Hi!');
    }
  }
}

// An interface is a way to define the structure and types on an object.  This can also be used in classes by using the implements keyword. => class Person implements Greetable {}...

// optional parameters - outputName?: string;  Just add a question mark before the colon.
// You can also mark methods as optional: myMethod?() {}

// You can add optional parameters in your constructor of your class with either the question mark, or by just including a default value.
// constructor(n: string = foo); constructor(n?: string). <-- in this case the default value would be undefined.

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

// readonly - You can add readonly in your interface to insure that that property cannot be changed.  This is essentially the same as adding it within your class, but you can add it in the interface too.

// extends  -- We can combine interfaces by using extends.  Basically works the same as extending classes.  This could be useful if you want to split which properties an object or class you are using this interface on needs. You can extend more than one.  Please note, this is not possible with classes, only interfaces. ex:
// interface Greetable extends Named, AnotherInterface {}

// interfaces with functions

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

// define your function like you would a method.  then after the parameters, a colon and the return value. the names of the params (a, b) don't matter, just their placement.  Using the custom type is the more common approach, but either that or interface will work.

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
