import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SaveBookBox from "../components/SaveBookBox";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: [],
    title: "",
    authors: [],
    link: "",
    description: "",
    image: "",
    id: ""
  };

  deleteBtnClicked = id => {
    API.deleteSavedBook(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  }

  componentDidMount() {
    API.getSavedBooks()
      .then(res => this.setState({ 
        books: res.data, 
        title: res.data.title, 
        authors: res.data.authors, 
        id:res.data.id,
        description:res.data.description,
        link:res.data.link,
        image:res.data.image   
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron
              savedOrSearch={"Your Saved Books"}
            />
          </Col>
        </Row>
        {this.state.books.map(book => (
          <SaveBookBox
            id={book._id}
            title={book.title}
            description={book.description}
            link={book.link}
            imgSrc={book.image}
            authors={book.authors}
            deleteBtnClicked={this.deleteBtnClicked}
        />
        ))}
      </Container>
    );
  }
}

export default Saved;
