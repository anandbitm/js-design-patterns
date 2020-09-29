
function VegPizza(name) {
    this.type = 'veg';
    this.name = name
}

function NonVegPizza(name) {
    this.type = 'non-veg';
    this.name = name
}

function PizzaFactory() {
    this.create = function (type, name) {
        switch (type) {
            case 'veg':
                return new VegPizza(name);
            case 'non-veg':
                return new NonVegPizza(name);
        }
    }
}

var factory = new PizzaFactory();
var pizza = factory.create('non-veg', 'chicken supreme');
console.log(pizza.name, pizza.type);