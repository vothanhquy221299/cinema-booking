import React, { Component } from "react";
import MovieList from "./MovieList/MovieList";
import Filter from "./Filter/Filter";
import Banner from "./Banner/Banner";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Banner/> */}
        {/* <Filter/> */}
        <MovieList/>
      </div>
    );
  }
}
