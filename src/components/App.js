import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideGallery from './SideGallery';
import NavBar from './NavBar';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import NotFound from './NotFound';

import '../index.css';

class App extends React.Component {
  state = {
    galleryHeight: null
  };

  setGalleryHeight = height => {
    this.setState({ galleryHeight: height });
  };

  render() {
    return (
      <div>
        <Router>
          <SideGallery galleryHeight={this.state.galleryHeight} />
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <About {...props} setGalleryHeight={this.setGalleryHeight} />
              )}
            />
            <Route
              exact
              path="/work"
              render={props => (
                <Work {...props} setGalleryHeight={this.setGalleryHeight} />
              )}
            />
            <Route
              exact
              path="/contact"
              render={props => (
                <Contact {...props} setGalleryHeight={this.setGalleryHeight} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
