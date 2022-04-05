import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import { render } from '@testing-library/react';
import React from 'react';
import Chatbox from './components/Chatbox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
    };
  }
  
  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
    });
  };   

  render() {
    return (
      <div className="App">
        <h1>Chat app</h1>
        <Chatbox items={this.state.items} />
        <form className="message-form" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Send</button>
      </form>
    </div>
    );
  }
}

export default App;
