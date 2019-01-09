import React from "react";
import "./style.css"

function ResultList(props){
  return(
    <ul>
      {props.books.map(book =>(
        <li key={book.id}>
          <img src={book.bookImg} alt="nothing"></img>
          <h3>{book.title}</h3>
          <span>
            {book.authors?(
                <h5>by {book.authors[0]}</h5>
              ):(
                "No Author"
              )}
          </span>
          <p>{book.description}</p>
          <button id={book.id} className="saveBook" onClick={(e)=>props.saveBook(e)}>Save</button>
        </li>
      ))}
    </ul>
  )
}

export default ResultList;