import React from "react";
import {Container, Row, Col } from "reactstrap"
import "./style.css"

function Bookshelf(props){

  return(
    <Container>
      <Row>
        <Col>
        <ul>
          {props.books.map(book=>(
            <li key={book._id}>
              <img src={book.image} alt="nothing"></img>
              <h3><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></h3>
              <h5> by {book.author}</h5>
              <p>{book.description}</p>
              <button id={book._id} className="deleteBook" onClick={(e)=>props.deleteBook(e)}>Delete</button>
            </li>
          ))}
        </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Bookshelf;