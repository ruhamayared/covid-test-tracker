const express = require("express")
const app = express()
require("dotenv").config()

const knex = require("knex")
const knexConfig = require("./knexfile")

// Use the `db` object to perform database operations
const db = knex(knexConfig.development)

const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

// Test the database connection
pool.connect((err, client, done) => {
  if (err) throw err
  console.log("Connected to the database")
  done()
})

// Add your routes and API endpoints below this section

// Test route to see if backend is working correctly
app.get("/tests", async (req, res) => {
  try {
    const tests = await getTests()
    res.json(tests)
  } catch (err) {
    res.status(500).json({ message: "Internal server error" })
  }
})
