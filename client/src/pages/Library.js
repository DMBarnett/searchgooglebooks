import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import API from "../utils/API";

class Library extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks().then(res => {
      this.setState({ books:res.data})
    });
  };

  render() {
    return (
      <Container>
        <Row>
          {/*This is for the Bookshelf on left of screen*/}
          <Col size="md-6 s-12">
            {this.state.books.length ? (
              console.log(this.state.books)
            ):(
              <h2>There's nothing on your shelf yet!</h2>
            )}
          </Col>
          {/*This is the section that displays the details for each book */}
        </Row>
        <Row />
      </Container>
    );
  }
}

export default Library;
