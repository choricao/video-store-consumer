import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import './SearchMovie.css';

const URL = "https://pure-everglades-58710.herokuapp.com/movies"

class SearchMovies extends Component {
  constructor (props) {
    super (props);

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
    axios.get(URL + `?query=${this.state.title}`)
    .then((response) => {
      this.setState({
        movies: response.data,
      })
    })
    .catch((error) => {
      this.setState({
        notification: error.message,
      })
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
          buttonName="Add To Library"
          newMovieMessageCallback={this.props.newMovieMessageCallback}
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
        <section className="search-collection">
          {this.renderMovieList()}
        </section>
      </article>
    )
  }

}

export default SearchMovies;
