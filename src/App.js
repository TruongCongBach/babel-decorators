import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

@connect(state => {
  return {
    sadasd: state.testStore
  }
}, dispatch => {
  return {
    changeTextBachRuoi: (text) => {
      dispatch({
        type: 'CHANGE_TEXT_BACH_RUOI',
        text
      })
    }
  }
})



class App extends Component {

  changeTextBachRuoi() {
    this.props.changeTextBachRuoi('bach ruoi');
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.changeTextBachRuoi.bind(this)} src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
