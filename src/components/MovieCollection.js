import React, { Component } from 'react';
import axios from 'axios'
import Movie from './Movie.js'

const URL = "http://localhost:3001/movies"

class MovieCollection extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(props.selectedMovieCallback);

    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    axios.get(URL)
    .then((response) => {
      this.setState({
        movies: response.data
      })
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  renderMovieList = () => {
    const movieList = this.state.movies.map((movie) => {
      return (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          imageURL={movie.image_url}
          overview={movie.overview}
          selectedMovieCallback={this.props.selectedMovieCallback}
        />
      );
    });
    return movieList;
  }

  render() {
    return (
      <div className="MovieCollection">
        {this.renderMovieList()}
      </div>
    );
  }

}

export default MovieCollection;
