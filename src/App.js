import React from 'react';
import Header from './Header.js';
import CardList from './CardList.js';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      value: ""
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="ma0 pa0 ">
        <Header state={this.state} handleChange={this.handleChange} />
        <CardList value={this.state.value}/>
      </div>
    )
  }
}

export default App;
