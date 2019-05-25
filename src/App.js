import React from 'react';
import Header from 'Header.js';
import Search from 'Search.js';
import CardList from 'CardList.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <CardList />
      </div>
    )
  }
}

export default App;
