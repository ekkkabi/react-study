import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = 'react';
    const style = {
      backgroundColor: 'lightgreen',
      padding: '15px',
      color: 'white',
      fontsize: '35px'
    }
    return (
      <div>
        {
          name === 'react' && <h1 style={style}>hello, {name}!</h1>
        }
      </div>
    )
  }
}
export default App;