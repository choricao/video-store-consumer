import React, { Component } from 'react';

class Movie extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="Movie">
        <h2>{this.props.title}</h2>
        <p>{this.props.releaseDate}</p>
        <img src={this.props.image} alt="movie poster" />
        <p>{this.props.overview}</p>
      </div>
    );
  }

}

export default Movie;
