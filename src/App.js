import React, { Component } from 'react';
import './App.css';
import MovieCollection from './components/MovieCollection.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  render() {
    const Home = () => (
      <div>
        <h2>Home</h2>
      </div>
    )

    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/library">Library</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/library" component={MovieCollection}/>
        </div>
      </Router>
    );
  }

}

export default App;
