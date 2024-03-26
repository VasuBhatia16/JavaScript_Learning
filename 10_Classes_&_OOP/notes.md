# Javascript and OOP
## Do Javascript really have classes?
Yes, JavaScript does have classes. This feature was introduced with the ECMAScript 2015 specification (often referred to as ES6). However, it's important to note that JavaScript is primarily a ```prototype-based language```, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms. In other words, it provides a more familiar syntax for developers coming from class-based languages such as Java or C++, but under the hood, it works somewhat differently. 

Here's a basic example of a class in JavaScript:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Method
  calculateArea() {
    return this.height * this.width;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.calculateArea()); // Output: 50

```

However, behind the scenes, JavaScript still uses prototypal inheritance. The class syntax is essentially a cleaner and more intuitive way to work with the prototype-based inheritance model that JavaScript has always had. Under the hood, a JavaScript class declaration creates a constructor function and methods on the prototype of that constructor function.

So, while JavaScript has a class syntax, it's important to understand that it doesn't work exactly like classes in traditional object-oriented languages, but rather as a layer of abstraction over JavaScript's existing prototype-based system.

## OOP in JavaScript

### Why use OOP
- #### Modularity:
    - OOP allows you to organize your code into reusable, self-contained modules (classes). Each class encapsulates its own data and behavior, making it easier to manage and maintain your codebase.
    - Classes can be imported/exported in modules, promoting a modular architecture where different parts of your application can be developed independently and then integrated seamlessly.
- #### Code Reusability:

    - OOP encourages the creation of reusable components (classes) that can be easily reused across different parts of your application or even in different projects.
    - Once a class is defined, it can be instantiated multiple times to create instances with similar behavior but different data, reducing code duplication.
- #### Scalability:

    - OOP provides a scalable way to organize and structure large codebases. By breaking down your application into smaller, manageable classes, you can easily add new features or modify existing ones without affecting other parts of the codebase.
    - Inheritance and composition allow you to extend or combine existing classes to create more complex and specialized components, enabling your application to grow in complexity while maintaining maintainability.

### Parts of OOP
- #### Object Literal `{}`
    An object literal is a way to create an object in JavaScript using curly braces {}. It allows you to define key-value pairs, where keys are strings (or symbols in ES6+) and values can be any valid JavaScript expression.

    ```javascript
    const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
    };

    console.log(person.name); // Output: John
    person.greet(); // Output: Hello, my name is John and I'm 30 years old.

    ```
- #### Constructor function
    Constructor functions are used to create objects with a shared structure and behavior. They are essentially regular functions, but they are typically used with the new keyword to create instances of objects.

    ```javascript
    function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
    }
    const john = new Person('John', 30);
    john.greet(); // Output: Hello, my name is John and I'm 30 years old.
    ```
- #### Prototypes
    In JavaScript, each object has a prototype, which is another object that it inherits properties and methods from. You can think of prototypes as a blueprint for objects. Prototypes allow for inheritance and sharing of properties and methods among objects.

    ```javascript
    Person.prototype.sayHi = function() {
    console.log(`Hi, my name is ${this.name}.`);
    };

    john.sayHi(); // Output: Hi, my name is John.
    ```
- #### Classes
    Classes in JavaScript are a syntactic sugar over constructor functions and prototypes. They provide a cleaner and more familiar syntax for defining objects and their behavior. Under the hood, JavaScript classes still use prototypes.

    ```javascript
    class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
    }
    const mary = new Person('Mary', 25);
    mary.greet(); // Output: Hello, my name is Mary and I'm 25 years old.
    ```
- #### Instances (new, this)
    Instances are individual objects created from a class or a constructor function using the new keyword. The this keyword refers to the current instance of an object within a method or constructor.

    ```javascript
    const obj = {}; // Creating an instance using object literal
    const person = new Person('Alice', 35); // Creating an instance using constructor function

    console.log(obj instanceof Object); // Output: true
    console.log(person instanceof Person); // Output: true

    // In the Person class constructor, `this` refers to the current instance being created

    ```


### 4 Pillars of OOP
- #### Abstraction
    Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. In JavaScript, abstraction can be achieved through various means such as creating classes with well-defined interfaces, using methods to encapsulate functionality, and exposing only necessary properties and methods to the outside world while hiding internal details.

    ```javascript
    class Animal {
    constructor(name) {
        this.name = name;
    }

    // Abstract method
    speak() {
        throw new Error('This method must be implemented by subclasses.');
    }
    }

    class Dog extends Animal {
        speak() {
            return `${this.name} says woof!`;
        }
    }

    const dog = new Dog('Buddy');
    console.log(dog.speak()); // Output: Buddy says woof!

    ```
- #### Encapsulation
    Encapsulation is the bundling of data and methods that operate on the data into a single unit (i.e., class). It allows for data hiding, meaning that the internal state of an object is hidden from the outside world and can only be accessed through public methods. In JavaScript, encapsulation can be achieved using closure, private variables (with the help of ES6 features like WeakMaps or symbols), or by convention (using naming conventions to indicate private members).

    ```javascript
    class Counter {
    constructor() {
        let count = 0; // Private variable

        this.increment = function() {
            count++;
        };

        this.getCount = function() {
            return count;
        };
    }
    }

    const counter = new Counter();
    counter.increment();
    console.log(counter.getCount()); // Output: 1
    // console.log(counter.count); // This would result in an error since `count` is private
    ```
- #### Inheritance
    Inheritance is a mechanism in object-oriented programming that allows a class (subclass) to inherit properties and methods from another class (superclass). In JavaScript, inheritance is implemented using prototypes. Subclasses can extend the behavior of their superclass and override methods as needed.

    ```javascript
    class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    info() {
        return `${this.make} ${this.model}`;
    }
    }

    class Car extends Vehicle {
        constructor(make, model, year) {
            super(make, model);
            this.year = year;
        }

        info() {
            return `${super.info()}, ${this.year}`;
        }
    }

    const myCar = new Car('Toyota', 'Camry', 2020);
    console.log(myCar.info()); // Output: Toyota Camry, 2020

    ```
- #### Polymorphism
    Polymorphism allows objects of different classes to be treated as objects of a common superclass. In JavaScript, polymorphism is achieved through method overriding. Subclasses can override methods inherited from their superclass to provide their own implementation, while still adhering to the interface defined by the superclass.

    ```javascript
    class Shape {
    area() {
        throw new Error('This method must be implemented by subclasses.');
    }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        area() {
            return Math.PI * this.radius ** 2;
        }
    }

    class Rectangle extends Shape {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        area() {
            return this.width * this.height;
        }
    }

    const circle = new Circle(5);
    const rectangle = new Rectangle(4, 6);

    console.log(circle.area()); // Output: ~78.54
    console.log(rectangle.area()); // Output: 24

    ```


