import React, { Component } from "react";
import { getMovie, getMovies } from "../../services/fakeMovieService.js";
import Like from "../common/Like.jsx";
import deleteButton from "./deleteButton.jsx";

export default class Movies extends Component {
  state = { movies: getMovies() };
  handleLike = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
  };
  render() {
    return (
      <React.Fragment>
        {this.state.movies.length !== 0 ? (
          <p className="text-center mt-4 mb-4">
            Showing {this.state.movies.length} movies in the database.
          </p>
        ) : (
          <p className="text-center mt-4 mb-4">No movie found. Add one.</p>
        )}
        <table className="table table-bordered ml-auto mr-auto mt-3 w-75">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, key) => (
              <tr key={key}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>

                <td>
                  <Like
                    Liked={movie.liked}
                    onCLick={() => this.handleLike(movie)}
                  />
                </td>
                <td>{movie.dailyRentalRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
