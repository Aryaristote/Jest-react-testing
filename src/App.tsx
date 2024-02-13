import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';

function App() {
  const x = 3;
  const y = 2;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="react logo" />
        <h4 data-testid="mytestid">
          Edit <code>src/App.tsx</code> and save to reload.
        </h4>
        <Login />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <b title='sum'>{x+y}</b>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Banana</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
