const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// In-memory list of products
let products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 }
];

// GET /products - returns the list of products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /products - accepts JSON data and adds a new product to the list
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
