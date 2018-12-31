const express = require("express");
const router = express.Router();

const Book = require("../../models/books")

//Retrieve all items api/book
//Gets from db
router.get("/", (req, res) =>{
  Book.find({})
  .then(books => res.json(books))
})

//Create a new book and add to the db
//Post to the db
router.post("/", (req, res) =>{
  console.log(req.body);
  const newBook = new Book({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  })
  newBook.save().then(book => res.json(book))
})

//Delete a book
router.delete("/:id", (req, res) =>{
  Book
    .findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({sucess:true})))
    .catch(err => res.json(err))
})

module.exports = router;