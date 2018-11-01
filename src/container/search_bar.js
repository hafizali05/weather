import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FetchWeather } from "../actions/index";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }
  onSubmitForm(event) {
    event.preventDefault();
    this.props.FetchWeather(this.state.term);
    this.setState({ term: "" });
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

function mapsDispatchToProps(dispatch) {
  return bindActionCreators({ FetchWeather }, dispatch);
}

export default connect(
  null,
  mapsDispatchToProps
)(Search);
