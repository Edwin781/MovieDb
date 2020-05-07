import React from "react";
import Loading from "./Loading";

const SearchBox = (props) => {
  return (
    <>
      <div className="row mx-auto justify-content-center">
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Search for a Movie"
          onChange={props.Onchange}
          onKeyDown={props.OnkeyDown}
        />
        {props.IsLoading && <Loading />}
      </div>
    </>
  );
};

export default SearchBox;
