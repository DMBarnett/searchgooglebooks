import axios from "axios";

export default {
  googleSearch: (url)=>{
    return axios.get(url)
  },

  getBooks: function(){
    return axios.get("/api/books")
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/"+id)
  },

  saveBook: function(input){
    return axios.post("/api/books", input)
  }
}