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
    API.getBooks().then(res=>console.log(res)).catch(err=>console.log(err))
  }

  typedInput = event =>{
    let foo = event.target.value;
    this.setState({
      search: foo
    });
  }

  saveResults= input=>{
    const working = input.map(element => {
      console.log(element);
      let foo = {
        title: element.volumeInfo.title,
        authors: element.volumeInfo.authors,
        bookImg: element.volumeInfo.imageLinks.smallThumbnail,
        link: element.volumeInfo.previewLink,
        description: element.volumeInfo.description,
        id:element.id
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

  saveBook = event =>{
    event.preventDefault();
    console.log(event.target.id)
    const foo = event.target.id;
    let bar;
    this.state.results.forEach(element => {
      if(element.id === foo){
        bar = element
        return bar;
      }
    });
    
    const input ={
      title:bar.title,
      author: bar.authors[0],
      description: bar.description,
      image: bar.bookImg,
      link:bar.link
    }

    API.saveBook({input})
      .then(res=>this.lookUpBooks())
      .catch(err=>console.log(err));
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
              <div className="form-group">
                <button onClick={this.searchGB}>Search</button>
              </div>
            </form>
          </Col>
        </Row>
        <Row >
          
          {this.state.results.length ?(
            <Col className="results" sm="12" md={{size:6, offset:3}}>
              <ResultList books={this.state.results} saveBook={this.saveBook}/>
            </Col>
          ):(
            <Col className="results" sm="12" md={{size:6, offset:3}}>
            <h3>Enter a book title to retrieve some results.</h3>
            </Col>
          )}
        </Row>
      </Container>
    )
  }
}

export default Search;