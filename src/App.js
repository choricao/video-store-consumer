import React, { Component } from 'react';
import './App.css';
import MovieCollection from './components/MovieCollection';
import CustomerCollection from './components/CustomerCollection';
import SearchMovie from './components/SearchMovie';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

const URL = "http://localhost:3001/rentals/check-out"

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedMovie: "",
      selectedCustomer: "",
      selectedCustomerId: "",
    }
  }

  setSelectedMovie = (title) => {
    this.setState({
      selectedMovie: title,
    });
  }

  setSelectedCustomer = (name, id) => {
    this.setState({
      selectedCustomer: name,
      selectedCustomerId: id,
    });
  }

  makeRental = () => {
    axios.post(URL + `?customer_id=${this.state.selectedCustomerId}&title=${this.state.selectedMovie}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {

    return (
      <Router>
        <article>
          <header>
            <Link className="button" to="/">Search</Link>
            <Link className="button" to="/library">Library</Link>
            <Link className="button" to="/customers">Customers</Link>
            <p>Selected Movie: {this.state.selectedMovie}</p>
            <p>Selected Customer: {this.state.selectedCustomer}</p>
            <button className="button" onClick={this.makeRental}>Make Rental</button>
          </header>

          <Route exact path="/" component={SearchMovie} />
          <Route exact path="/search" component={SearchMovie} />
          <Route
            path="/library"
            render={(props) => <MovieCollection {...props} selectedMovieCallback={this.setSelectedMovie} />}
            />
          <Route
            path="/customers"
            render={(props) => <CustomerCollection {...props} selectedCustomerCallback={this.setSelectedCustomer} />}
            />
        </article>
      </Router>
    );
  }

}

export default App;
