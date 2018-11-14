import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: "Shawn Hassen",
      email: "Shassen89@gmail.com"
    }
  }

  render() {

    return (
      <div className="App">
        <div className="img-1"></div>
        <div className="info">Scroll Up and Down this page to see the parallax scrolling effect.
                              This div is just here to enable scrolling.
                              Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
        <div className="img-2"></div>
      </div>
    );

  }

}

export default App;
