/** 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("favorites", table => {
    table.increments("id").primary();
    table.integer("user_id").references("users.id").notNullable().onDelete("CASCADE");
    table.text("country_name").notNullable();
    table.integer("area");
    table.integer("population");
    table.text("capital");
    table.text("flag");
    table.text("ccn3").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.unique(["user_id", "ccn3"]); 
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("favorites"); 
