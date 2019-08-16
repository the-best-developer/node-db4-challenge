
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex('recipes').truncate().then( _ => {
      return knex('recipes').insert([
        { recipe_name: "Apple Pie" },
        { recipe_name: "Chocolate Cake" },
        { recipe_name: "Cherry Pie" },
      ]);
    })
    .then(_ => {
      return knex('ingredients').truncate().then( _ => {
        return knex('ingredients').insert([
            { ingredient_name: "milk", },
            { ingredient_name: "sugar" },
            { ingredient_name: "salt" },
            { ingredient_name: "coffee" },
            { ingredient_name: "water" },
            { ingredient_name: "flour" }
        ])
      })
    })
    .then(_ => {
      return knex('steps').truncate().then( _ => {
        return knex('steps').insert([
            { step: "Cut apples" },
            { step: "Make pie shell" },
            { step: "Boil water" },
            { step: "Pour milk" },
            { step: "Brew Coffee" },
            { step: "Add vanilla extract" },
            { step: "Add sugar" },
            { step: "Add flour" },
            { step: "Cut apples" }
        ])
      })
    })
    .then(_ => {
      return knex('recipe_ingredients').truncate().then( _ => {
        return knex('recipe_ingredients').insert([
            { recipe_id: 1, ingredient_id: 1, quantity: "4.5" },
            { recipe_id: 1, ingredient_id: 3, quantity: "0.05" },
            { recipe_id: 1, ingredient_id: 2, quantity: "1.10" },

            { recipe_id: 2, ingredient_id: 1, quantity: "2" },
            { recipe_id: 2, ingredient_id: 6, quantity: "3.33" },
            { recipe_id: 2, ingredient_id: 2, quantity: "1" },
            
            { recipe_id: 3, ingredient_id: 5, quantity: "5" },
            { recipe_id: 3, ingredient_id: 6, quantity: "1" },
            { recipe_id: 3, ingredient_id: 1, quantity: "1.5" }
        ])
      })
    })
    .then(_ => {
      return knex('recipe_steps').truncate().then( _ => {
        return knex('recipe_steps').insert([
          { recipe_id: 1, step_id: 1},
          { recipe_id: 1, step_id: 3},
          { recipe_id: 1, step_id: 2},
            
          { recipe_id: 2, step_id: 6},
          { recipe_id: 2, step_id: 7},
          { recipe_id: 2, step_id: 4},
            
          { recipe_id: 3, step_id: 8},
          { recipe_id: 3, step_id: 7},
          { recipe_id: 3, step_id: 3}
        ])
      })
    })
  )
};
