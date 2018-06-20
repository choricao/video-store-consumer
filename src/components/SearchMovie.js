import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import './MovieCollection.css';

const URL = "http://localhost:3001/movies"

class SearchMovies extends Component {
  constructor () {
    super ();

    this.state = {
      title: "",
      movies: [],
    }
  }

  onFieldChange = (event) => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  const updateState = {};

  updateState[fieldName] = fieldValue;
  this.setState(updateState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(URL + `?query=${this.state.title}`);
    axios.get(URL + `?query=${this.state.title}`)
    .then((response) => {
      this.setState({
        movies: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  renderMovieList = () => {
    const movieList = this.state.movies.map((movie) => {
      return (
        <Movie
          key={movie.external_id}
          title={movie.title}
          releaseDate={movie.release_date}
          imageURL={movie.image_url}
          overview={movie.overview}
          buttonName="Add This Movie to Library"
        />
      );
    });
    return movieList;
  }

  render() {
    return (
      <article className="search-container">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title" >Search: </label>
          <input
            name="title"
            placeholder="movie title"
            value={this.state.title}
            onChange={this.onFieldChange}
          />
          <input className="button" type="submit" />
        </form>
        <section className="collection">
          {this.renderMovieList()}
        </section>
      </article>
    )
  }

}

export default SearchMovies;
