import React from "react";
//import "./style.css";
import { Col, Row } from "../Grid";


function SearchBookBox(props) { // this part will take book datas and show on the page.
  return (
    <Row>
      <Row>
        <Col size="md-3">
          <img alt={props.title} src={props.imgSrc} />
        </Col>
        <Col size="md-9">
          <article>
            <h1>{props.title}</h1>
            <p>{props.authors}</p>
            <br></br>
            <br></br>
            <p>{props.description}</p>
            <br></br>
            <br></br>
            <p>{props.link}</p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-5">
          <button key={props.id} onClick={() => props.saveBtnClicked(props.bookToSave)} style={{marginBottom: 10 }} className="btn btn-success">
            Save Book
          </button> 
        </Col>  
      </Row>
    </Row>
  );
}

export default SearchBookBox;