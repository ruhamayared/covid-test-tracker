# COVID Test Tracker

COVID Test Tracker is a simple web application built using the PERN stack (PostgreSQL, Express.js, React, Node.js) that allows users to add their names, select the type of COVID test they have taken, and add their test results. This application provides an easy way for users to track their COVID test history and share their results.

This Tracker will use the [MakeMyTestCount](https://learn.makemytestcount.org/) site as an example.

## Technology Stack

The COVID Test Tracker application is built using the following technologies:

- PostgreSQL: A powerful open-source relational database management system.
- Express.js: A fast and minimalist web application framework for Node.js.
- React: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime environment that allows server-side execution of JavaScript.

## Schema

The database schema for the COVID Test Tracker application consists of the following tables:

Stores information about users who have taken an at-home COVID test: test result, type of test.
  - id: integer (primary key)
  - test_result: string
  - test_type: string
  - date-taken: string
  - created-at: timestamp

## CRUD Routes

The COVID Test Tracker application supports the following CRUD (Create, Read, Update, Delete) operations:

- **Create**: Allows users to select their test results and the type of test.
  - Route: POST /users
  - Parameters: test_result (string), test_type (integer)

- **Read**: Allows users to view their test history and test details.
  - Route: GET /users
  - Parameters: None

Add a verify page so users can verfiy info before creating.

## Wireframes

Here are wireframes illustrating the basic layout and design of the COVID Test Tracker application:

![Wireframe 1](link_to_wireframe_1)
![Wireframe 2](link_to_wireframe_2)
![Wireframe 3](link_to_wireframe_3)
