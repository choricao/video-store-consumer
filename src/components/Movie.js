import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import css from './Movie.css'

const URL = "http://localhost:3001/movies"

class Movie extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    selectedMovieCallback: PropTypes.func.isRequired,
    buttonName: PropTypes.string,
  }

  selectedMovieCallback = () => {
    this.props.selectedMovieCallback(this.props.title);
  }

  addMovie = () => {
    axios.post(URL +
      `?title=${this.props.title}&release_date=${this.props.releaseDate}&image_url=${this.props.imageURL}&overview=${this.props.overview}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  renderButton = () => {
    if (this.props.buttonName === "Select This Movie") {
      return <button onClick={this.selectedMovieCallback} >{this.props.buttonName}</button>
    } else if (this.props.buttonName === "Add This Movie to Library") {
      return <button onClick={this.addMovie} >{this.props.buttonName}</button>
    }
  }

  render() {
    return (
      <article className="movie-container">
        <div className="info">
          <img className="image" src={this.props.imageURL} alt="movie poster" />
          <div className="details">
          <h2>{this.props.title}</h2>
          <p>{this.props.releaseDate}</p>
          {this.renderButton()}
          </div>
        </div>
        <div className="overview">
          <p>{this.props.overview}</p>

        </div>
      </article>
    );
  }

}

export default Movie;
