import React from "react";
const Error = (props) => {
  return (
    <>
      <div className="row justify-content-center text-light">
        <h5 className="alert-danger mt-2">{props.message}</h5>
      </div>
    </>
  );
};

export default Error;
