console.log("Hello World");

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("This is a circle");
  },
};

circle.draw();

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      //   console.log(`Radius is ${radius}`);
      console.log("This is a Factory function");
    },
  };
}

const circleFactory = createCircle(1);
circleFactory.draw();

//Constructor Function
function Circle(radius) {
  // console.log(this);
  (this.radius = radius),
    (this.draw = function () {
      console.log("This is a Constructor function");
    });
}

const circleConstructor = new Circle(1);
circleConstructor.draw();

//Emmumerate all the members in an object - use for loop
const circle1 = new Circle(10);
for (let key in circle1) {
  if (typeof circle1[key] !== "function") {
    console.log(key, circle1[key]);
  }
}

//To get all the keys in an Object - use Object class
const keys = Object.keys(circle1);
console.log(keys);

//To check for the existance of any member of an object - use in operator
if ("radius" in circle1) console.log("Circle has a raadius");

//Value
let x = 10;
let y = x;
x = 20;
console.log(`x : ${x} and y : ${y}`);

let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number);

//Reference
let x1 = { value: 10 };
let y1 = x1;
x1.value = 20;
console.log(`x : ${x1.value} and y : ${y1.value}`);

let number1 = { value: 10 };
function increase(number1) {
  number1.value++;
}

increase(number1);
console.log(number1);

//Use of bracket notation over dot notation while adding/removing the property

// const obj = new Class1();

// obj.prop1 = { ... };
// obj['prop2'] = { ... };

// //Dynamic assignment of values to the property
// const propertyName = 'newProperty';
// obj[propertyName] = { ... };
// //OR
// const propertyName = 'new-property';
// obj.new-property //is invalid
// obj['new-property'] = { ... }

//Getter and Setter
function CircleExample(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  // this.getDefaultLocation = function() {
  //     return defaultLocation;
  // }

  this.draw = function () {
    console.log("Draw Circle");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid input");
      defaultLocation = value;
    },
  });
}

const circleEx = new CircleExample(5);
// circleEx.getDefaultLocation();
// circleEx.defaultLocation = 1;
circleEx.draw();

//Sample Exercise
function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started!");

    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch has not started!");

    running = false;
    stopTime = new Date();

    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;

    //this.reset();
  };

  this.reset = function () {
    startTime = null;
    stopTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperties(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
}

const sw = new Stopwatch();
