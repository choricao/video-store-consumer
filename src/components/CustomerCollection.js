import React, { Component } from 'react';
import axios from 'axios'
import Customer from './Customer.js'
import './CustomerCollection.css';

const URL = "https://pure-everglades-58710.herokuapp.com/customers"

class CustomerCollection extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
    }
  }

  componentDidMount = () => {
    axios.get(URL)
    .then((response) => {
      this.setState({
        customers: response.data
      })
    })
    .catch((error) => {
      this.setState({
        notification: error.message
      })
    });
  }

  renderCustomerList = () => {
    const customerList = this.state.customers.map((customer) => {
      return (
        <Customer
          key={customer.id}
          id={customer.id}
          name={customer.name}
          phone={customer.phone}
          accountCredit={customer.account_credit}
          checkedOutMoviesCount={customer.movies_checked_out_count}
          selectedCustomerCallback={this.props.selectedCustomerCallback}
        />
      );
    });
    return customerList;
  }

  render() {
    return (
      <div className="collection">
        {this.renderCustomerList()}
      </div>
    );
  }
}

export default CustomerCollection;
