import React from "react";

import { BiSearchAlt } from "react-icons/bi";
import { Form, Button } from "react-bootstrap";

class SongSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: "" };
  }

  handleInputChanged(event) {
    // Called when the text in input box is changed

    this.setState({
      searchQuery: event.target.value,
    });
  }

  handleButtonClicked(event) {
    // Called on search button click

    var searchQuery = this.state.searchQuery;
    alert(searchQuery);
  }

  handleSubmit(event) {
    // Called when form is submitted

    // Search Button tag
    var submitBtn = event.target.getElementsByTagName('button')[0];
    // Click the button
    submitBtn.click();
    // Prevent page reload
    event.preventDefault();
  }

  render() {
    // Returns a form element that contains a text box and a search button

    return (
      <Form className="d-flex" onSubmit={this.handleSubmit.bind(this)}>
        <Form.Control
          autoFocus
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={this.handleInputChanged.bind(this)}
        />
        <Button variant="primary" onClick={this.handleButtonClicked.bind(this)}>
          <BiSearchAlt />
        </Button>
      </Form>
    );
  }
}

export default SongSearchForm;
