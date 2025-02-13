const express = require("express");
const app = express();
const port = 3000;

const productos = [
  { id: 1, name: "Producto 1", price: 100 },
  { id: 2, name: "Producto 2", price: 200 },
];

const carrito = [];

app.get("/product", (req, res) => {
  res.json(productos);
});

app.get("/cart/:id", (req, res) => {
  const id = req.params.id;
  const producto = productos.find((producto) => producto.id == id);
  carrito.push(producto);
  res.json("Producto agregado al carrito");
});
app.get("/cart", (req, res) => {
  res.json(carrito);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
