import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="Movie">
        <h2>{this.props.title}</h2>
        <p>{this.props.releaseDate}</p>
        <img src={this.props.imageURL} alt="movie poster" />
        <p>{this.props.overview}</p>
      </div>
    );
  }

}

export default Movie;
