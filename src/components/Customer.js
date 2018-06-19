import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Customer.css';

class Customer extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    accountCredit: PropTypes.string.isRequired,
    id: PropTypes.number,
    checkedOutMoviesCount: PropTypes.number.isRequired,
    selectedCustomerCallback: PropTypes.func.isRequired,
  }

  selectedCustomerCallback = () => {
    this.props.selectedCustomerCallback(this.props.name, this.props.id);
  }

  render () {
    console.log('in customer component');
    return (
      <article className="customer-container">
        <h2 className="card-header">{this.props.name}</h2>
        <p><strong>Phone:</strong> {this.props.phone}</p>
        <p><strong>Account Credit:</strong> ${this.props.accountCredit}</p>
        <p className="movie-count"><strong>Checked Out Movies Count:</strong> {this.props.checkedOutMoviesCount}</p>
        <button onClick={this.selectedCustomerCallback} >Select This Customer</button>
      </article>
    );
  }
}

export default Customer;
