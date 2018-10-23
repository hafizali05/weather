import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }
  onSubmitForm(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="input-group">
        <input
          placeholder="Lets know the weather by your location"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
