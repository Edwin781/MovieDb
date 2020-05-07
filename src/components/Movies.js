import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movies.css";
import Error from "./Error";
import SearchBox from "./SearchBox";
import Results from "./Results";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import FilterNoImage from "../Util/FilterNoImage";

class Movie extends Component {
  state = {
    items: [],
    term: "Avengers",
    IsLoading: false,
    error: [],
  };

  fetchData = () => {
    this.setState({ IsLoading: true });
    const api = process.env.REACT_APP_WeatherApi;
    fetch(`https://www.omdbapi.com/?apikey=${api}&s=${this.state.term}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          error: data.Error,
          IsLoading: false,
          items: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleChange = (event) => {
    if (!event.target.value) {
      return console.log("Null input detected");
    } else {
      this.setState({ term: event.target.value, error: "" });
    }
  };

  handlekeydown = (e) => {
    if (e.key === "Enter") {
      this.setState({ error: "" });
      if (!e.target.value) {
        this.setState({ error: "Cannot be Empty" });
        return;
      }
      this.fetchData();
    }
  };

  render() {
    const { Search } = this.state.items;

    //Filter Out Post without images
    const searchresult = FilterNoImage(Search);

    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <SearchBox
            Onchange={this.handleChange}
            OnkeyDown={this.handlekeydown}
            IsLoading={this.state.IsLoading}
          />

          {this.state.error ? <Error message={this.state.error} /> : null}

          <Results Search={searchresult} />
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
