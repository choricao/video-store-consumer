import React, { Component } from 'react';
import axios from 'axios'
import Customer from './Customer.js'

const URL = "http://localhost:3001/customers"

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
        error: error.message
      })
    });
  }

  renderCustomerList = () => {
    const customerList = this.state.customers.map((customer) => {
      return (
        <Customer
          key={customer.id}
          name={customer.name}
          phone={customer.phone}
          accountCredit={customer.account_credit}
          checkedOutMoviesCount={customer.movies_check_out_count}
          selectedCustomerCallback={this.props.selectedCustomerCallback}
        />
      );
    });
    return customerList;
  }

  render() {
    return (
      <div className="CustomerCollection">
        {this.renderCustomerList()}
      </div>
    );
  }
}

export default CustomerCollection;
