const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend Deployment Successful");
});

app.listen(5050, "0.0.0.0", () => {
  console.log("Server running on port 5050");
});
