import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

  updateFilterCallback = event => {
    // console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruits => this.setState({ fruits }));
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
