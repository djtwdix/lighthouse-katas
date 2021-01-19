const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].ingredients.includes(ingredientCheck(bakeryA, recipes[i].ingredients)) && recipes[i].ingredients.includes(ingredientCheck(bakeryB, recipes[i].ingredients))) {
      return recipes[i].name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [{
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

const ingredientCheck = function(bakery, recipe) {
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < recipe.length; j++) {
      if (bakery[i] === recipe[j]) {
        return recipe[j];
      }
    }
  }
}

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [{
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
