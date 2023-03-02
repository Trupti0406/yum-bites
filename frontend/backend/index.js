const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();
app.get("/", (req, res) => {
  res.send("Halloooo");
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUsers"));
app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
