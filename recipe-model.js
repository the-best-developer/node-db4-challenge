const db = require('./recipe-schemes.js');

const getRecipes = _ => {
      return db('recipes');
}


const getShoppingList = async (id) => {
    try{
        const shopList = await db('recipe_ingredients as res_ing')
        .join('ingredients as ing', 'ing.id', '=', 'res_ing.ingredient_id')
        .select('res_ing.recipe_id', 'ing.ingredient_name', 'res_ing.quantity')
        .where({ recipe_id: id})
        
        return shopList;
    }
    catch {
        return null;
    }
}

const getInstructions = async (id) => {
    try{
        const shopList = await db('recipe_steps as res_steps')
        .join('steps as stp', 'stp.id', '=', 'res_steps.step_id')
        .join('recipes as res', 'res.id', '=', 'res_steps.recipe_id')
        .select('res.recipe_name', 'stp.step')
        .where({ recipe_id: id})
        
        return shopList;
    }
    catch {
        return null;
    }
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
  }