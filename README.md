# rest-api-boilerplate

Node, Express, TypeScript and MongoDB with Authentication. 
Containerised with Docker & Docker Compose.

To run production ready app:
```bash
docker compose down -v && docker compose up -d --build
```

Access at:
http://localhost:8080/

To run local dev version:
```bash
npm i && npm run dev
```

Access at:
http://localhost:1337/

You will need an `.env` file:
```
API_PORT=1337

MONGODB_URL=mongodb://mongoadmin:mongopassword@localhost:27017/mydatabase?authSource=admin
MONGO_INITDB_ROOT_USERNAME=mongoadmin
MONGO_INITDB_ROOT_PASSWORD=mongopassword

AUTH_SECRET=secret
```

The `.env.prod` should look like this (note the difference in the connection string because MongoDB should be on the same 'network' as the API):
```
API_PORT=8080

MONGODB_URL=mongodb://mongoadmin:mongopassword@mongo:27017/mydatabase?authSource=admin
MONGO_INITDB_ROOT_USERNAME=mongoadmin
MONGO_INITDB_ROOT_PASSWORD=mongopassword

AUTH_SECRET=secret
```

## Available routes:
### POST - /auth/register

Register with the following credentials in the body:
```json
{
    "email": "vitaliy@krynv.dev",
    "password": "fred",
    "username": "krynv"
}
```
___________
### POST - /auth/login

Login with the following credentials in the body:
```json
{
    "email": "vitaliy@krynv.dev",
    "password": "fred"
}
```
___________
### GET - /users

List all users (must be logged in)

___________
### PATCH - /users/:id

Update the given user's username (must be logged in and owner), with the following request body:
```json
{
    "username": "krynv25"
}
```
___________
### DELETE - /users/:id
Update the given user from the database (must be logged in and owner)