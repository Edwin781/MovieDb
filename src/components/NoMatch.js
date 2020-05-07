import React from "react";
import { Link } from "react-router-dom";

export default function Nomatch() {
  return (
    <>
      <div
        className="NotFound"
        style={{ color: "white", textAlign: "center", paddingTop: "200px" }}
      >
        <h2>This Page Does not Exit</h2>
        <br />
        <Link to="/">
          <h4>Go Back Home</h4>
        </Link>
      </div>
    </>
  );
}
