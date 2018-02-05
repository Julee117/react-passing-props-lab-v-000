import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

  updateFilterCallback = event => {
    console.log('update filter to: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  render() {
    return (
      <FruitBasket
        fruits={this.state.fruit}
        filters={this.state.filters}
        filter={this.state.currentFilter}
        updateFilterCallback={this.updateFilterCallback}
      />
    )
  }
}

export default App;
