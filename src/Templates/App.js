import React from 'react';
import Header from '../Components/Header/Header.js';
import CardList from '../Components/Cardlist/CardList.js';
import Scroll from '../Components/Scroll/Scroll.js';
import ErrorBoundry from '../Components/ErrorBoundry.js';

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
        <Scroll>
          <ErrorBoundry>
            <CardList value={this.state.value} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App;
