function Pizza(name) {
    this.name = name;
    this.getName = function () {
      return this.name;
    }
  }
  
  class PizzaV1 {
    constructor(name){
      this.name = name;
    }
    getName(){
      return this.name;
    }
  }
  
  let pizza = new Pizza('exotic');
  let pizzaV1 = new PizzaV1('exotic v1');
  console.log(pizza.getName());
  console.log(pizzaV1.getName());