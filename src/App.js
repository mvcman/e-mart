import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProuctList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
    return (
      <React.Fragment>
          <Navbar />
          <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/store" component={Cart} />
              <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
