
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

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/main/screenshots/01-create-first-task.png?raw=true)

POST /api/tasks - Creates first task "Setup Node.js project" with realistic development workflow data.

Status: 201 Created
Purpose: Demonstrates task creation with meaningful project data.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/main/screenshots/02-create-second-task.png?raw=true)

POST /api/tasks - Creates second task "Build API endpoints" showing multiple task creation capability.

Status: 201 Created
Purpose: Shows the API can handle multiple tasks with unique IDs.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/main/screenshots/03-get-all-tasks.png?raw=true)

GET /api/tasks - Retrieves both created tasks showing complete data persistence.

Status: 200 OK
Purpose: Demonstrates data retrieval with multiple tasks stored in database.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/main/screenshots/04-update-task-status.png?raw=true)

PUT /api/tasks/1 - Updates first task status from "completed" to "in-progress".

Status: 200 OK
Purpose: Demonstrates task update functionality with status change.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/main/screenshots/05-get-updated-task.png?raw=true)

GET /api/tasks/1 - Verifies the update worked by retrieving the modified task.

Status: 200 OK
Purpose: Confirms update operation actually changed the database data.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/main/screenshots/06-delete-task.png?raw=true)

DELETE /api/tasks/2 - Removes the second task from the database completely.

Status: 200 OK
Purpose: Demonstrates task deletion functionality.

![App Screenshot](https://github.com/Muoki-Mary/task-management-api/blob/main/screenshots/07-final-state-after-delete.png?raw=true)

GET /api/tasks - Shows final state with only the updated task remaining after deletion.

Status: 200 OK
Purpose: Confirms deletion worked and shows final database state.



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

