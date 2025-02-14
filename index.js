const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

const productos = [
  {
    id: 1,
    titulo: "Laptop Gamer ASUS",
    descripcion: "Laptop potente con procesador Intel i7, 16GB RAM y RTX 4050.",
    precio: 60,
    imagen:
      "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg",
  },
  {
    id: 2,
    titulo: "Smartphone Samsung Galaxy S23",
    descripcion:
      "Pantalla AMOLED de 6.8 pulgadas, Snapdragon 8 Gen 2 y cámara de 200MP.",
    precio: 100,
    imagen:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/61897842_1/w=1500,h=1500,fit=pad",
  },
  {
    id: 3,
    titulo: "Monitor LG UltraGear 27”",
    descripcion:
      "Monitor 144Hz con 1ms de respuesta, ideal para gaming competitivo.",
    precio: 120,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1PXm4-iSGNbGAVZn3FyudJWFJxDFfsj2jQ&s",
  },
  {
    id: 4,
    titulo: "Teclado Mecánico RGB",
    descripcion:
      "Switches rojos, retroiluminación RGB personalizable y diseño compacto.",
    precio: 70,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_607250-MCO71196965188_082023-O.webp",
  },
//   {
//     id: 5,
//     titulo: "Mouse Logitech G Pro",
//     descripcion: "Sensor HERO 25K, diseño ergonómico y peso ultra ligero.",
//     precio: 30,
//     imagen:
//       "https://panamericana.vtexassets.com/arquivos/ids/521683/mouse-logitech-gaming-inalambrico-pro-negro-97855137128.jpg?v=638373850721870000",
//   },
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

app.get("/budget/:id", (req, res) => {
  const precioMaximo = Number(req.params.id);
  const resultado = [];
  const ordenar = productos.sort((a, b) => a.precio - b.precio);

  let totalPrecio = 0;

  for (let i = 0; i <= ordenar.length; i++) {
    if (totalPrecio + ordenar[i].precio <= precioMaximo) {
      resultado.push(ordenar[i]);
      totalPrecio += ordenar[i].precio;
    } else {
      break;
    }
  }
  res.json(resultado);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
