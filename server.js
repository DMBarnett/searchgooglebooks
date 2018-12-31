const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.json())

const PORT = process.env.port || 5000;

const dbkey = require("./config/keys").mongoURI;
mongoose
.connect(dbkey)
  .then(()=>`Candygram for Mongo, database running`)
  .catch(err => console.log(err));

app.listen(PORT, ()=> console.log(`Server connected on port ${PORT}`));