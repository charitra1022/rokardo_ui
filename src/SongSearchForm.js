import React from "react";
import { useState } from "react";

import { useNavigate, createSearchParams } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";
import { Form, Button } from "react-bootstrap";

function SongSearchForm() {
  // state for input search terms
  let [searchQuery, setSearchQuery] = useState("");

  // Called when the text in input box is changed
  const handleInputChanged = (event) => setSearchQuery(event.target.value);

  // navigate to song search url with search params
  const navigate = useNavigate();
  const goToSongSearch = (params) =>
    navigate({
      pathname: "/song/search",
      search: `?${createSearchParams(params)}`,
    });

  // Called when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    let params = { q: searchQuery }; // Get search key from input box
    goToSongSearch(params); // navigate to the url for song search
  };

  // Returns a form element that contains a text box and a search button
  return (
    <Form className="d-flex" onSubmit={handleSubmit} method="get">
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
