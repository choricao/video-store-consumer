import React, { Component } from 'react';

class Customer extends Component {

  render () {
    console.log('in customer component');
    return (
      <article className="customer-container">
        <h2>{this.props.name}</h2>
        <p><strong>Phone:</strong> {this.props.phone}</p>
        <p><strong>Account Credit:</strong> ${this.props.accountCredit}</p>
        <p><strong>Checked Out Movies Count:</strong> {this.props.checkedOutMoviesCount}</p>
      </article>
    );
  }
}

export default Customer;
