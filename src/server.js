const express = require("express");
// same as import just older version

const app = express();

// app.get("/health", (req, res) => {
//     res.send("healthy");
// });

app.listen(5001, () => {
    console.log("Server is listening on port 5001");
});