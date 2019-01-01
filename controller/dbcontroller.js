const db = require("../models");

module.exports= {
    findAll: (req,res) =>{
        db.Book.find(req.query).then(resp => res.json(resp)).catch(err=>res.json(err));
    },
    findById: (req,res)=>{
        db.Book.findById(req.params.id).then(resp => res.json(resp)).catch(err=>res.json(err));
    },
    
}