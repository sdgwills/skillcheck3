import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header/Header';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        { routes }
      </div>
    </HashRouter>
  );
}

export default App;
