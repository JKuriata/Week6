const express = require("express");
// same as import just older version

const app = express();

app.use("/book", (request, response) => {
  const book = {
    title: "Lord of the Rings",
    author: "J.R.R Tolkien",
    genre: "Fantasy",
  };
  const successResponse = {
    message: "Book successfully retreived",
    book: book,
  };
  response.send(successResponse);
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
