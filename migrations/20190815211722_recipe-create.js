
exports.up = function(knex) {

    return (
        knex.schema
        .createTable('recipes', table => {
            table.increments();
            table.string('recipe_name', 256)
            .notNullable();
        })
        .createTable('ingredients', table => {
            table.increments();
            table.string('ingredient_name', 256)
            .notNullable();
        })
        .createTable('steps', table => {
            table.increments();
            table.string('step')
        })
        .createTable('recipe_ingredients', table => {
            table.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('recipes')
            table.integer('ingredient_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('ingredients')
            table.float('quantity')
                .notNullable();
            table.primary(['recipe_id', 'ingredient_id']);
        })
        .createTable('recipe_steps', table => {
            table.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('recipes')
            table.integer('step_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('steps')
            table.primary(['recipe_id', 'step_id']);
        })
    );
};

exports.down = function(knex) {
    return (
        knex.schema
            .dropTableIfExists('recipe_steps')
            .dropTableIfExists('recipe_ingredients')
            .dropTableIfExists('steps')
            .dropTableIfExists('ingredients')
            .dropTableIfExists('recipes')
    )
}