import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
import SearchBookBox from "../components/SearchBookBox";

class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: [],
    link: "",
    description: "",
    image: "",
    id: "",
    que: ""
  };

  searchBooks = event => {
    event.preventDefault();
    console.log("Your que : " + this.state.que)
    API.getSearchedBooks(this.state.que)
      .then(res=>{
        console.log("Our book search is here\n")
        console.log(res.data.items)
        console.log(res.data.items[0].volumeInfo.title)
        console.log(res.data.items[0].volumeInfo.description)
        console.log(res.data.items[0].accessInfo.webReaderLink)
        console.log(res.data.items[0].volumeInfo.imageLinks.smallThumbnail)
        console.log(res.data.items[0].volumeInfo.authors)
        this.setState({books : res.data.items}); // it send book data that we searched to state to show.
                                           // all of datas collecting inside of books. 
                                           // exp. if we need images, books[0].volumeInfo.imageLinks.thumbnail gonna be first result image
      })
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveBtnClicked = bookData => {
    let book={
      title:bookData.volumeInfo.title,
      link:bookData.accessInfo.webReaderLink,
      authors:bookData.volumeInfo.authors,
      description:bookData.volumeInfo.description,
      image:"http://books.google.com/books/content?id="+bookData.id+"&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      id:bookData.id,
    }
    console.log("Sended book to save : ")
    console.log(book)
    API.saveBook(book)
      .then(res => console.log("Data Saved !!!!"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron
              savedOrSearch={"Which Book Would You Like To Search"}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <form>
              <Input
                value={this.state.que}
                onChange={this.handleInputChange}
                name="que"
                placeholder="Book Name"
              />
              <button onClick={this.searchBooks} style={{ marginBottom: 10 }} className="btn btn-success">
                Search Book
              </button> 
          </form>
          </Col>
        </Row>
        {this.state.books.map(book => (
          <SearchBookBox key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            link={book.accessInfo.webReaderLink}
            imgSrc={"http://books.google.com/books/content?id="+book.id+"&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"}
            authors={book.volumeInfo.authors}
            saveBtnClicked={this.saveBtnClicked}
            bookToSave={book}
          />
        ))}
      </Container>
    );
  }
}

export default Books;
