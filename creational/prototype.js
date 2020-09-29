var pizza = {
    type: 'veg',
    toppings: true
  };
  
  let exotic = Object.create(pizza, { name: { value: 'exotic' } });
  console.log(exotic.type, exotic.name);