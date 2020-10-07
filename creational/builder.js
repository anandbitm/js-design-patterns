// builder pattern
// customer -> order -> chef -> prepares -> pizza / pasta

// chef -> veg pizza
// base pan
// add topings
// add extras
// bake

// chef -> pasta
// take ingredients
// add topings
// prepare

// VegPizza
function VegPizza(options) {
    this.type = options.type;
    this.category = options.category;
    this.size = options.size;
    this.toppings = options.toppings;
    this.extras = options.extras;
}

VegPizza.prototype.getDetails = function () {
    console.log(`You have ordered ${this.type} ${this.category} ${this.size} pizza.
    \n${this.toppings.join(',')} are toppings and ${this.extras.join(',')} are extras.`);
}

// Pasta
function Pasta(options) {
    this.size = options.size;
    this.toppings = options.toppings;
}

Pasta.prototype.getDetails = function () {
    console.log(`You have ordered ${this.size} pasta.
    \n${this.toppings.join(',')} are toppings.`);
}

// PizzaBuilder
function PizzaBuilder() {
    this.pizza;

    const addToppings = function () {
        console.log('Toppings added', this.pizza.toppings);
    }

    const addExtras = function () {
        console.log('Toppings added', this.pizza.extras);
    }

    const bake = function () {
        console.log('Pizza baked')
    }

    this.init = function (options) {
        this.pizza = new VegPizza(options);
    }

    this.process = function () {
        addToppings.call(this);
        addExtras.call(this);
    }

    this.finalize = function () {
        bake.call(this);
    }

    this.get = function () {
        return this.pizza;
    }
}

// PastaBuilder
function PastaBuilder() {
    this.pasta;

    const addToppings = function () {
        console.log('Toppings added', this.pasta.toppings);
    }

    const bake = function () {
        console.log('Pasta baked')
    }

    this.init = function (options) {
        this.pasta = new Pasta(options);
    }

    this.process = function () {
        addToppings.call(this);
    }

    this.finalize = function () {
        bake.call(this);
    }

    this.get = function () {
        return this.pasta;
    }
}

function Chef() {
    this.construct = function (builder, options) {
        builder.init(options);
        builder.process();
        builder.finalize();
        return builder.get();
    }
}

var pizzaBuilder = new PizzaBuilder();
var pastaBuilder = new PastaBuilder();

var chef = new Chef();
var pizza = chef.construct(pizzaBuilder, {
    type: 'veg',
    category: 'signature',
    size: 'medium',
    toppings: ['mushroom', 'corn'],
    extras: ['cheese', 'veg kabab']
});

var pasta = chef.construct(pastaBuilder, {
    size: 'medium',
    toppings: ['mushroom', 'corn', 'cheese']
});

console.log('Pizza is ready');
pizza.getDetails();

console.log('Pasta is ready');
pasta.getDetails();