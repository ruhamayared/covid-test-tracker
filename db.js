// This file will contain the necessary functions to handle database interactions and perform CRUD operations.

// Function to get tests from the database
const getTests = async () => {
  try {
    const client = await pool.connect() // Acquire a connection from the connection pool
    const result = await client.query("SELECT * FROM tests") // Execute a query to retrieve all tests
    client.release() // Release the connection back to the connection pool for reuse
    return result.rows // Return the retrieved test data
  } catch (err) {
    throw err // Throw an error if any exception occurs during the database operation
  }
}

// Add a function for creating tests and other neccessary functions here

module.exports = { getTests }
