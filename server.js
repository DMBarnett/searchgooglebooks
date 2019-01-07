const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes)

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.port || 5000;

const dbkey = require("./config/keys").mongoURI;
console.log(dbkey);
mongoose
  .connect(dbkey, { useNewUrlParser: true})
  .then(()=>`Candygram for Mongo, database running`)
  .catch(err => console.log(err));

app.listen(PORT, ()=> console.log(`Server connected on port ${PORT}`));