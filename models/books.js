const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
  title:{
    type: String,
    required: true
  }
})

module.export = Book = mongoose.model("item", BookSchema)