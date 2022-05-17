import withData from "hocs/withData";
import React from "react";

function MovieList(props) {
  console.log(props);
  return (
    <div className="col-6">
      <h3>Movie List</h3>
      {props.data.map((movie) => {
        return (
          <div className="card mb-3" key={movie.maPhim}>
            <div className="card-body">
              <h4 className="card-title">{movie.tenPhim}</h4>
              <p className="card-text">{movie.moTa}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withData(MovieList);