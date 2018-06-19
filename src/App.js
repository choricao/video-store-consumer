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

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedMovie: "",
      selectedCustomer: "",
    }
  }

  setSelectedMovie = (title) => {
    this.setState({
      selectedMovie: title,
    });
  }

  setSelectedCustomer = (name) => {
    this.setState({
      selectedCustomer: name,
    });
  }

  render() {

    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li>Selected Movie: {this.state.selectedMovie}</li>
            <li>Selected Customer: {this.state.selectedCustomer}</li>
          </ul>

          <hr/>

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
        </div>
      </Router>
    );
  }

}

export default App;
