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