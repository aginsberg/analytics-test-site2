import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

class Home extends Component {
  constructor() {
    super();
    this.state = {
      mediumValue: '',
      sourceValue: ''
    };

    this.handleChangeMedium = this.handleChangeMedium.bind(this);
    this.handleChangeSource = this.handleChangeSource.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMedium(event) {
    this.setState({mediumValue: event.target.value});
  }

  handleChangeSource(event) {
    this.setState({sourceValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    window.ga('set', 'campaignMedium', this.state.mediumValue);
    window.ga('set', 'campaignSource', this.state.sourceValue);
    console.log(`Page View Fired with Source: ${this.state.sourceValue}, Medium: ${this.state.mediumValue}`);
  }

  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title">Google Analytics Playground, Site2</h1>
          <h4 className="App-title">Fill out the form below to set the UTM Source/Medium</h4>
        </header>

        <div className="Form-wrapper">

          <div className="Form-descriptionWrapper">
            <p className="Form-description">
              Submitting this form will set the UTM Source/Medium values and immediately fire a 'pageview' event.
            </p>
            <p className="Form-description">
              Results available in developer console.
            </p>
          </div>

          <form onSubmit={this.handleSubmit} className="Form-utm">
            <label>
              Medium_UTM
              <input type="text" value={this.state.mediumValue} onChange={this.handleChangeMedium} />
            </label>
            <label>
              Source_UTM
              <input type="text" value={this.state.sourceValue} onChange={this.handleChangeSource} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">topics</Link>

        <div className="README-wrapper">
            <p className="README-text">
              This site is meant to be used along with site1 to test enhancing client's Google Analytics to more strongly represent the traffic
              their Yext Pages are driving towards their corporate page. The 2 ways we can set the UTM Source/Medium is via analytics.js and with query params.
              By default, this site shares a tracking id with site1, but that can be changed in the script tag of index.html to test using with different analytics 
              account/properties.
            </p>

            <h4 className="README-title">
              Analytics.js
            </h4>
            <p className="README-text">
              By filling out the form and submitting, analytics will set the UTM_Source and UTM_Medium via 'ga('set', 'campaignMedium', [value])' and 
              'ga('set', 'campaignSource', [value])'. Immediately after setting it, a pageview event will be fired, which can be seen in the analytics console for
              the page.
            </p>

            <h4 className="README-title">
              Query Params
            </h4>
            <p className="README-text">
              Pressing the query params run a function that searches for all outbound links on the page and appends params for Source/Medium to the end of the url.
              This will cause the params (Yext, Pages) to appear as the Source/Medium for the traffic.
            </p>
        </div>
      </div>
    );
  }
}

class About extends Component {
  render() {
    window.ga('send', 'pageview', window.location.pathname)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About</h1>
        </header>
        <p className="App-intro">
          Testing where page views are coming from Updaye.
        </p>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">topics</Link>
      </div>
    );
  }
}

class Topics extends Component {
  render() {
    window.ga('send', 'pageview', window.location.pathname)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Topics</h1>
        </header>
        <p className="App-intro">
          Testing where page views are coming from Updaye.
        </p>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">topics</Link>
      </div>
    );
  }
}

export default App;
