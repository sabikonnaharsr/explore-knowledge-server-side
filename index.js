const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.Port || 5000;
app.use(cors());

const books = require("./data/books.json");

const category = require("./data/booksCategory.json");


app.get("/", (req, res) => {
  res.send("Now server is running...");
});


app.get("/categories", (req, res) => {
  res.send(category);
});



app.get("/books", (req, res) => {
  res.send(books);
});



app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const getSingleItem = books?.filter((p) => p.uid == id);
  res.send(getSingleItem);
});



