// Knex.js is a SQL query builder. It is used to build SQL queries in JavaScript.

// The up function defines the actions to perform when migrating up (creating the table).
exports.up = function (knex) {
  return knex.schema.createTable("tests", function (table) {
    table.increments("id").primary()
    table.string("test_result")
    table.string("test_type")
    table.string("date_taken")
    table.timestamp("created_at").defaultTo(knex.fn.now())
  })
}

// The down function defines the actions to perform when migrating down (dropping the table).
exports.down = function (knex) {
  return knex.schema.dropTable("tests")
}
