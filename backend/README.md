# Movie Notes API

## 📋 Overview

This is a Node.js-based API for managing movie notes and tags, developed as part of the Rocketseat programming course. The application allows users to create, read, update, and delete user profiles, movie notes, and associated tags.

## ✨ Features

- User management (create, update, delete, list users)
- Movie notes management (create, update, delete, list notes)
- Tag management and filtering
- Comprehensive API endpoints for flexible interactions

## 🚀 Technologies Used

- Node.js
- Express.js
- Knex.js (SQL query builder)
- SQLite (Database)

## 🔧 Prerequisites

- Node.js (v14 or higher)
- npm

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/csrprojects/expertS10FrontAndBack.git
cd expertS10FrontAndBack/backend
```

2. Install dependencies
```bash
npm install
```

3. Set up the database
```bash
npx knex migrate:latest
```

## 🌟 Running the Application

Start the server:
```bash
npm run start
```

## 📍 API Endpoints

### Users
- `POST /users/`: Create a new user
- `PUT /users/:id`: Update user details
- `DELETE /users/:id`: Remove a user
- `GET /users/:id`: Retrieve a specific user
- `GET /users/`: List users (with optional filters)

### Movie Notes
- `POST /notes/`: Create a new movie note
- `PUT /notes/:id`: Update a movie note
- `DELETE /notes/:id`: Remove a movie note
- `GET /notes/:id`: Retrieve a specific movie note
- `GET /notes/`: List movie notes (with optional filters)

### Tags
- `GET /tags`: List tags (with optional filters)

## 🔒 Security Recommendations

- Passwords are encrypted
- Cascading delete for associated records

## 📝 Notes

- Deleting a user will also remove their associated movie notes and tags
- Deleting a movie note will remove its associated tags
