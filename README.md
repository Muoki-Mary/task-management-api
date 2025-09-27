
# Task Management API

A REST API for managing tasks, built with Node.js and Express. Uses SQLite for storage.

## Features

- Create, read, update, and delete tasks
- SQLite database 
- Input validation
- RESTful endpoints
- CORS support

## Tech Stack

**Server:** Node.js, Express, SQLite3, CORS

## API Reference

```http
GET    /api/tasks      # Get all tasks
GET    /api/tasks/:id  # Get single task
POST   /api/tasks      # Create task
PUT    /api/tasks/:id  # Update task
DELETE /api/tasks/:id  # Delete task
```

## Screenshots

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/feature/setup-dependencies/screenshots/01-get-all-tasks.png?raw=true)



GET /api/tasks - Returns empty array [] showing the API is running and database is connected, but no tasks exist yet.

Status: 200 OK
Purpose: Proves baseline functionality before adding data.



![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/feature/setup-dependencies/screenshots/02-create-task.png?raw=true)

POST /api/tasks - Creates the first task with title and description data sent in request body.

Status: 201 Created
Purpose: Shows successful task creation and returns the new task with auto-generated ID.


![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/feature/setup-dependencies/screenshots/03-get-all-tasks-after-create.png?raw=true)


GET /api/tasks - Retrieves all tasks after creating the first one, now returns an array with one task object.

Status: 200 OK
Purpose: Confirms the task was successfully saved to database and can be retrieved.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/feature/setup-dependencies/screenshots/04-create-second-task.png?raw=true)


POST /api/tasks - Creates a second task, demonstrating the API can handle multiple task creation.

Status: 201 Created
Purpose: Shows the API can create multiple tasks and assigns unique IDs to each new task.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/feature/setup-dependencies/screenshots/05-get-both-tasks.png?raw=true)


GET /api/tasks - Retrieves all tasks after creating two, now returns an array with both task objects.

Status: 200 OK
Purpose: Demonstrates the API correctly stores and retrieves multiple tasks from the database.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/feature/setup-dependencies/screenshots/06-delete-task.png?raw=true)


DELETE /api/tasks/3 - Deletes a specific task by ID, removing it from the database.

Status: 200 OK
Purpose: Demonstrates the DELETE operation works correctly and can remove tasks by their unique ID.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/feature/setup-dependencies/screenshots/07-update-task.png?raw=true)


PUT /api/tasks/2 - Updates an existing task by ID, modifying its properties in the database.

Status: 200 OK
Purpose: Demonstrates the UPDATE operation works correctly and can modify existing tasks, returning success confirmation.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`NODE_ENV`

## Installation

Install task-management-api with git

```bash
git clone https://github.com/Muoki-Mary/task-management-api.git
cd task-management-api
npm install
```

## Run Locally

Clone the project

```bash
git clone https://github.com/Muoki-Mary/task-management-api.git
```

Go to the project directory

```bash
cd task-management-api
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run start
```

## Running Tests

To run tests, run the following command

```bash
npm run dev
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

