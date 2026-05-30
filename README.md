

# Authentication API

A Node.js and Express.js based authentication system using MongoDB, Mongoose, JWT, and Cookies.

## Features

* User Registration
* JWT Authentication
* Cookie-Based Authentication
* Protected Routes
* MongoDB Integration
* User Retrieval API

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* Cookie Parser
* dotenv

## Project Structure

```text
src
│
├── controllers
│   └── auth.controller.js
│
├── models
│   └── user.model.js
│
├── routes
│   ├── auth.routes.js
│   └── post.routes.js
│
├── db
│   └── db.js
│
└── app.js

server.js
```

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Run the Project

```bash
npm start
```

or

```bash
npx nodemon server.js
```

## API Endpoints

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
```

### Get Users

```http
GET /api/auth/users
```

### Protected Route

```http
POST /api/posts/post-create
```

This route requires a valid JWT token stored in cookies.

## Authentication Flow

1. User registers.
2. User data is stored in MongoDB.
3. JWT token is generated.
4. Token is stored in cookies.
5. Protected routes verify the token.
6. Authorized users can access protected resources.

## Future Improvements

* Password Hashing using bcrypt
* Login API
* Logout API
* Authentication Middleware
* Role-Based Authorization
* Refresh Tokens

## Author

Aadarsh Ojha


