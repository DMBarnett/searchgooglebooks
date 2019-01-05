import axios from "axios";

export default {
  googleSearch: (url)=>{
    return axios.get(url)
  },

  getBooks: function(){
    return axios.get("/api/books")
  }
}