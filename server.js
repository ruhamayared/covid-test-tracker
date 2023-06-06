const express = require("express")
const app = express()
require("dotenv").config()

// Knex.js is a SQL query builder. It is used to build SQL queries in JavaScript.
const knex = require("knex")
const knexConfig = require("./knexfile")

// Use the `db` object to perform database operations
const db = knex(knexConfig.development)

const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Test the database connection
db.raw("SELECT 1")
  .then(() => {
    console.log("Connected to the database.")
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err)
  })

// Test route to see if backend is working correctly
app.get("/tests", async (req, res) => {
  try {
    const tests = await db.select().from("tests")
    res.json(tests)
  } catch (err) {
    console.error("Error retrieving tests:", err)
    res.status(500).json({ message: "Internal server error" })
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
