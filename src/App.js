import React from 'react';
import Header from './Header.js';
import CardList from './CardList.js';

class App extends React.Component {
  render() {
    return (
      <div className="ma0 pa0 ">
        <Header />
        <CardList />
      </div>
    )
  }
}

export default App;
