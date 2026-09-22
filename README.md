# Express.js Products API

A simple Express.js API built as part of an Express.js tutorial assignment. It exposes two routes for managing an in-memory list of products.

## Setup

```bash
npm install
node products-api.js
```

The server runs at `http://localhost:8080`.

## Endpoints

### GET /products

Returns the list of products.

**Example response:**
```json
[
  { "id": 1, "name": "Laptop", "price": 999 },
  { "id": 2, "name": "Mouse", "price": 25 }
]
```

### POST /products

Accepts JSON data and adds a new product to the list.

**Request body:**
```json
{
  "name": "Keyboard",
  "price": 49
}
```

**Example response (201 Created):**
```json
{
  "id": 3,
  "name": "Keyboard",
  "price": 49
}
```

## Testing with Postman

Both routes were tested using Postman:

- **POST** `http://localhost:8080/products` with a JSON body `{ "name": "Keyboard", "price": 49 }` returned `201 Created` with the newly created product (`id: 3`).
- **GET** `http://localhost:8080/products` returned `200 OK` with the full updated list, including the newly added "Keyboard" product.

## Project Structure

This repository also includes the full set of Express.js tutorial exercises:

- `app.js` – main app using modular routers (`routes/users.js`, `routes/products.js`)
- `products-api.js` – the GET/POST `/products` API for this assignment
- `routes.js` – basic routing example (GET, POST, wildcard 404 handler)
- `route-params.js` – route parameters example
- `query-params.js` – query parameters example
- `middleware.js` – JSON/URL-encoded parsing and static file middleware
- `error-handling.js` – synchronous and asynchronous error-handling middleware
- `static-files.js` – serving static files from the `public` folder
- `routes/` – modular route files (`users.js`, `products.js`)
- `public/` – static assets (`hello.txt`, `css/style.css`, `js/script.js`, `images/logo.png`)
