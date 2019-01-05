import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import API from "../utils/API";
import List from "../components/List";
import ListItem from "../components/ListItem";

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
      <Grid>
        <Row>
          {/*This is for the Bookshelf on left of screen*/}
          <Col size="md-6 s-12">
            {this.state.books.length ? (
              <List>
                {this.books.map(book=>(
                  <ListItem>

                  </ListItem>
                ))}
              </List>
            ):(
              <h2>There's nothing on your shelf yet!</h2>
            )}
          </Col>
          {/*This is the section that displays the details for each book */}
        </Row>
        <Row />
      </Grid>
    );
  }
}

export default Library;
