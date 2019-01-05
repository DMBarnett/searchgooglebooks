import React from "react";
import "./style.css"

function ResultList(props){
  return(
    <ul>
      {props.books.map(book =>(
        <li>
          <img src={book.bookImg} alt="nothing"></img>
          <h3>{book.title} by {book.authors[0]}</h3>
          <p>{book.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default ResultList;