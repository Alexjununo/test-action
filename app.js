const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send({
    message: "hello world",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});