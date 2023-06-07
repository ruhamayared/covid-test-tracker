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

// GET route to retrieve all tests for testing purposes
app.get("/tests", async (req, res) => {
  try {
    // Fetch all tests from the "tests" table
    const tests = await db.select().from("tests")
    res.json(tests)
  } catch (err) {
    console.error("Error retrieving tests:", err)
    res.status(500).json({ message: "Internal server error" })
  }
})

// POST/CREATE route to add a new test
app.post("/tests", async (req, res) => {
  try {
    // Extract test data from the request body
    const { test_result, test_type, date_taken } = req.body
    // Insert a new test into the "tests" table
    const newTest = await db("tests").insert({ test_result, test_type, date_taken })
    res.json(newTest)
  } catch (err) {
    console.error("Error creating test:", err)
    res.status(500).json({ message: "Internal server error" })
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
