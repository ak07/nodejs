Instructions for running locally

create a .env file and add the following entries
1. PORT
2. DB_URL

PORT is for assigning the port for the api to run. By default if no value is provided the app runs on port 3000.
DB_URL is the mongodb connection string.

cd into the root directory
run "npm install"

run "npm run dev" to start the server

api.rest file contains some sample api requests to test the rest api. This only works on VScode with Rest Client extension installed.
or we can use postman to trigger the api requests.

API list:

GET /api/v1/tasks - Lists all tasks
GET /api/v1/tasks/:id - Gets task with particular id
POST /api/v1/task - Create a new task
PATCH /api/v1/task/:id - Updates a task with a particular id
DELETE /api/v1/task/:id - Delets a task with the particular id


