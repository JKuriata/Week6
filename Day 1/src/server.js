const express = require("express");

const app = express();

// HTTP Verbs - GET, POST, PUT, DELETE

// const response = await fetch("http://someaddress.com"); // sends GET request

// HTTP Verb GET

const fakeArr = [];

app.use(express.json());

app.get("/books", (request, response) => {
  console.log("/books: ", request.path);
  response.send({ message: "success", fakeArr: fakeArr });
});

app.get("/books/getfirstbook", (request, response) => {
  // get the first book
  console.log("/books/books: ", request.path);
  const book = fakeArr[0];
  response.send({ message: "success", book: book });
});

app.post("/books", (request, response) => {
  console.log("title: ", request.body.title);
  console.log("genre: ", request.body.genre);
  console.log("author: ", request.body.author);

  fakeArr.push(request.body);

  let awesome;
  for (let i = 0; i < fakeArr.length; i++) {
    if (fakeArr[i].title === request.body.title) {
      awesome = "it's awesome";
    }
  }
  console.log(awesome);
  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

//Change Author Name
app.put("/books", (request, response) => {
  const { title, newAuthor } = request.body;

  // Find the index of the book with the matching title
  const index = fakeArr.findIndex((book) => book.title === title);

  if (index !== -1) {
    // Update the author of the book at the found index
    fakeArr[index].author = newAuthor;
    response.send({ message: "success", updatedBook: fakeArr[index] });
  } else {
    response.status(404).json({ message: "Book not found" });
  }
});

//deleting Book
app.delete("/books", (request, response) => {
  const { title } = request.body;

  // Find the index of the book with the matching title
  const index = fakeArr.findIndex((book) => book.title === title);

  if (index !== -1) {
    // Remove the book from the array
    const deletedBook = fakeArr.splice(index, 1)[0];
    response.send({ message: "success", deletedBook: deletedBook });
  } else {
    response.status(404).json({ message: "Book not found" });
  }
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
