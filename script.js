function dishes(recipe, available) {
    let maxDishes = Infinity;
    for (let ingredient in recipe) {
      if (available[ingredient]) {
        maxDishes = Math.min(maxDishes, Math.floor(available[ingredient] / recipe[ingredient]));
      } else {
        maxDishes = 0;
        break;
      }
    }
    return maxDishes;
  }



console.log(dishes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // output: 2

console.log(dishes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // output: 0
