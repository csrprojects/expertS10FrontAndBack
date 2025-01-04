/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('movie_notes', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description');
        table.integer('rating');
        table
            .integer('user_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('movie_notes');
};
