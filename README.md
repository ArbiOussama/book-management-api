# Book Management API
This is a simple RESTful API to manage a collection of books. It allows you to add, retrieve, update, and delete books while providing basic authentication.

# Features
Add a new book
Retrieve a list of all books
Get details of a specific book
Update a book's details
Delete a book
Basic authentication for secure access
Prerequisites
Node.js version 16.16.0
npm (Node package manager)
SQLite (ideal for local development and small projects)

# Installation
- Clone the repository
- Install dependencies: npm install
- Create a .env file in the root directory and add the following environment variables :
    PORT=3000
    JWT_SECRET=yourSecretKey

# Running the Application
- npx nodemon src/server.js
- The app will run on the specified port (default: 3000)


# Testing the API
Using Postman or cURL
You can use Postman or cURL to test the API endpoints.

POST /api/auth/login: Login and get access
GET /api/books: Get all books (Bearer token required)
POST /api/books: Add a new book (Bearer token required)
PUT /api/books/:id: Update a book by ID (Bearer token required)
DELETE /api/books/:id: Delete a book by ID (Bearer token required)
GET /api/books/:id: Get a specific book (Bearer token required)
Invalid Route Handler : Endpoint: Any route that does not match the defined API endpoints

# API Endpoint Example
- Endpoint: POST /api/auth/login
    Request Body:{
    "username": "admin",
    "password": "admin"
    }
- Response {
  "token": "your_jwt_token"
  }
Note: This will return a JWT token. You will need this token to access protected routes.

- Add a New Book:
    Endpoint: POST /api/books
    Authorization: Bearer Token is required in the Authorization header:
    Request Body:{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedDate": "1925-04-10",
    "numberOfPages": 180
    }
- Response:{
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedDate": "1925-04-10",
    "numberOfPages": 180
    }
