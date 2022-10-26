const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;
const bookCategory = require("./data/booksCategory.json");
const books = require("./data/books.json");

app.get("/", (req, res) => {
  res.send("Now server is running...");
});

app.get("/categories", (req, res) => {
  res.send(bookCategory);
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const getSingleItem = books?.filter((p) => p.uid == id);
  res.send(getSingleItem);

  //   if (!getSingleItem) {
  //     res.send(getSingleItem);
  //   }
});

app.get("/booksCategory/:name", (req, res) => {
  const getCategory = bookCategory?.filter((p) => p.category == name);
  res.send(getCategory);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});
