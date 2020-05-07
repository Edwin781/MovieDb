import React, { Component } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import NavBar from "./NavBar";
import "./Movies.css";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
    };
  }

  fetchData = async (id) => {
    const apiKey = process.env.REACT_APP_WeatherApi;

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log("dataarea", data);
        this.setState({
          Data: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    console.log("imbd id ", id);
    this.fetchData(id);
  }

  render() {
    const { Data } = this.state;
    console.log("Data", Data.Title);
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 mt-3">
              <div className="card">
                <img class="card-img-top" src={Data.Poster} />
              </div>
            </div>
            <div className="col-sm-8 mx-auto" style={{ color: "white" }}>
              <div className="Title">
                <h1 style={{ textAlign: "center" }}>{Data.Title}</h1>
              </div>
              <div className="Ratings mb-2">
                <i class="fa fa-star myicon" aria-hidden="true">
                  {Data.imdbRating}
                </i>
                <span className="ml-2">{Data.Rated}</span>
              </div>
              <div className="StoryArea">
                <p>{Data.Plot}</p>
              </div>
              <br />
              <div className="Actors">
                <h5 style={{ fontWeight: "bolder" }}>Actors</h5>
                <p>{Data.Actors}</p>
              </div>
              <div className="Awards">
                <h5 style={{ fontWeight: "bolder" }}>Awards</h5>
                <p>{Data.Awards}</p>
              </div>
              <div className="Actors"></div>
              <div className="Actors"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(MovieDetail);
