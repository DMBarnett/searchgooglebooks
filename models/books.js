const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
  title:{
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link:{
    type: String
  },
  bookID:{
    type:String,
    required: true
  }
})

module.exports = Book = mongoose.model("Book", BookSchema)