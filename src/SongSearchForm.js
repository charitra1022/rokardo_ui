import React from "react";
import { useState } from "react";

import { useSearchParams } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";
import { Form, Button } from "react-bootstrap";



function SongSearchForm() {
  // State for url parameters
  let [searchParams, setSearchParams] = useSearchParams();

  // state for input search terms
  let [searchQuery, setSearchQuery] = useState("");


  // Called when the text in input box is changed
  const handleInputChanged = (event) => setSearchQuery(event.target.value);

  
  // Called when form is submitted
  const handleSubmit = (event) => {

    // Prevent page reload
    event.preventDefault();

    let params = {q: event.target.getElementsByTagName('input')[0].value}
    setSearchParams(params);

    console.log(searchParams);
  }


  
  // Returns a form element that contains a text box and a search button
  return (
    <Form className="d-flex" onSubmit={handleSubmit} method='get'>
      <Form.Control
        autoFocus
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleInputChanged}
      />
      <Button variant="primary" type="submit">
        <BiSearchAlt />
      </Button>
    </Form>
  );
  
}

export default SongSearchForm;
