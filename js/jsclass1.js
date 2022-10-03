class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
  
  let myCar = new Car("BMW");
  console.log(Car.hello(myCar));