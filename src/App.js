import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

import SearchMovie from './components/SearchMovie';
import MovieCollection from './components/MovieCollection';
import CustomerCollection from './components/CustomerCollection';
import './App.css';

const URL = "https://pure-everglades-58710.herokuapp.com/rentals/check-out"

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
      this.setState({
        notification: "Rental successfully added.",
        selectedMovie: "",
        selectedCustomer: "",
        selectedCustomerId: "",
      })
    })
    .catch((error) => {
      this.setState({
        notification: error.message
      })
    })
  }

  displayNotification = () => {
    setTimeout(this.notificationTimer, 6000);
    return this.state.notification
  }

  notificationTimer = () => {
    this.setState({ notification: ""})
  }

  render() {
    return (
      <Router>
        <article>
          <section className="fixed-header">
            <header>
              <Link className="button" to="/">Search</Link>
              <Link className="button" to="/library">Library</Link>
              <Link className="button" to="/customers">Customers</Link>
              <section className="movie-selection">
                <p><strong>Selected Movie</strong></p>
                <p>{this.state.selectedMovie}</p>
              </section>
              <section className="customer-selection">
                <p><strong>Selected Customer</strong></p>
                <p>{this.state.selectedCustomer}</p>
              </section>
              <button className="button" onClick={this.makeRental}>Make Rental</button>
            </header>
            <p className="notification">{this.displayNotification()}</p>
          </section>

          <section>
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
          </section>
        </article>
      </Router>
    );
  }

}

export default App;
