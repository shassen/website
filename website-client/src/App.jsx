import React, { Component } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
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
        <Nav />
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    );

  }

}

export default App;
