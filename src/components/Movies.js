import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movies.css";
import { DebounceInput } from "react-debounce-input";
import MovieDetail from "./MovieDetails";

class Movie extends Component {
  state = {
    items: [],
    term: "Merlin",
    title: "",
    image: "",
    Description: "",
    loading: false,
    error: "",
  };

  fetchData = () => {
    console.log("called");
    const api = process.env.REACT_APP_WeatherApi;
    fetch(
      `https://www.omdbapi.com/?apikey=${api}&s=${
        this.state.term
      }&plot=${"short"}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          items: data,
          title: data.title,
          image: data.Poster,
          Description: data.plot,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.error("Error:", error);
      });
  };
  //Attempt to pass data to a new screen using route etc (currently not working)
  /* fetchSpecific = () => {
    fetch(`http://www.omdbapi.com/?apikey=${api}&s=${this.state.term}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        <MovieDetail details={data} />;
      })
      .catch((error) => {
        <MovieDetail errors={error} />;
        console.error("Error:", error);
      });
  }; */

  componentDidMount() {
    this.fetchData();
  }

  handleChange = (event) => {
    if (!event.target.value) {
      return console.log("Null input detected");
    } else {
      this.setState({ term: event.target.value });
    }

    // this.fetchData();
  };

  handlekeydown = (e) => {
    console.log("this", e.target.value);
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        this.fetchData();
      }
    }
  };

  render() {
    const { Search } = this.state.items;
    console.log(Search);

    return (
      <>
        <div className="container">
          <div className="row mx-auto">
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Search for Movie"
              onChange={this.handleChange}
              onKeyDown={this.handlekeydown}
            />
            {/*  <MovieDetail /> */}
          </div>
          <div className="row">
            {Search
              ? Search.map((item) => {
                  return (
                    <div className="col-sm-4" key={item.imdbID}>
                      <div className="card mt-5 mb-3">
                        <a href="#">
                          <img
                            src={item.Poster}
                            className="card-img-top"
                            alt="..."
                            style={{
                              width: "100%",
                              height: "60vh",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
