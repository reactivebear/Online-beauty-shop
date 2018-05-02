import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Produtos from './components/Produtos';
import Navbar from './components/templates/CustomNavbar';
import Footer from './components/templates/Footer';
import {StorageKeys} from "./utils/storagekeys";
import {Api} from "./api/api";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Produtos" component={Produtos}/>
          <Footer />
        </div>
      </Router>
    );
  }

  componentDidMount() {
    const apiKeyString = localStorage.getItem(StorageKeys.APIKEY);

    if (apiKeyString) {
      Api.setApiKey(apiKeyString);
      Api.keepToken();
    } else {
      Api.loginAsGuest();
    }
  }
}

export default App;
