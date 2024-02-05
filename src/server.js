const express = require("express");
// same as import just older version

const app = express();

app.use("/example", express.static("example"));
app.use("/stormlight", express.static("stormlight"));

// app.get("/health", (req, res) => {
//     res.send("healthy");
// });

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
