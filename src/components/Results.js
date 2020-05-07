import React from "react";
import { Link } from "react-router-dom";

const Results = (props) => {
  const SearchResult = props.Search;
  return (
    <>
      <div className="row">
        {SearchResult
          ? SearchResult.map((item, index) => {
              return (
                <div className="col-sm-4" key={index}>
                  <div className="card mt-3 mb-3">
                    <Link to={`/MovieDetail/${item.imdbID}`}>
                      <img
                        src={item.Poster}
                        className="card-img-top"
                        alt="Image Unavailable"
                        style={{
                          width: "100%",
                          height: "60vh",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Results;
