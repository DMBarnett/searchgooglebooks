import React, { Component } from "react";
import {Container, Col, Row} from "reactstrap";
import ResultList from "../components/ResultList";
import API from "../utils/API";
import "./style.css"

class Search extends Component{
  state ={
    results:[],
    search: ""
  }

  lookUpBooks(){

  }

  typedInput = event =>{
    let foo = event.target.value;
    this.setState({
      search: foo
    });
  }

  saveResults= input=>{
    const working = input.map(element => {
      let foo = {
        title: element.volumeInfo.title,
        authors: element.volumeInfo.authors,
        bookImg: element.volumeInfo.imageLinks.smallThumbnail,
        link: element.volumeInfo.previewLink,
        description: element.volumeInfo.description
      };
      return foo;
    })
    this.setState({
      results:working
    });
    console.log(this.state.results)
  }

  searchGB = event =>{
    event.preventDefault();
    const title = this.state.search.replace(/ /g, "+");
    let url= "https://www.googleapis.com/books/v1/volumes?q="+title
    console.log(url);
    API.googleSearch(url)
      .then(res =>{
        this.saveResults(res.data.items);
      })
  }

  

  render(){
    return(
      <Container>
        <Row className="search-top">
          <Col sm="12" md={{size: 6, offset:3}}>
            <form>
              <div className="form-group">
                <input type="text" className="searchfield" onChange={(e)=>this.typedInput(e)} placeholder="Enter a book name here"></input>
              </div>
              <button onClick={this.searchGB}>Search</button>
            </form>
          </Col>
        </Row>
        <Row>
          {this.state.results.length ?(
            <ResultList books={this.state.results} />
          ):(
            <h3>Enter a book title to retrieve some results.</h3>
          )}
        </Row>
      </Container>
    )
  }
}

export default Search;