import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideGallery from './SideGallery';
import NavBar from './NavBar';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import NotFound from './NotFound';

import '../index.css';

class App extends React.Component {
  state = {
    galleryHeight: null,
    section: 'Meredith Lackey'
  };

  componentDidMount() {
    window.addEventListener('resize', () =>
      this.setGalleryHeight(window.innerHeight - 20)
    );
  }

  setGalleryHeight = height => {
    this.setState({ galleryHeight: height });
  };

  setSection = location => {
    let section = '';
    if (location === '/') {
      section = 'Meredith Lackey';
    } else if (location === '/work') {
      section = 'Work';
    } else if (location === '/contact') {
      section = 'Contact';
    }
    this.setState({ section });
  };

  render() {
    return (
      <div>
        <Router>
          <SideGallery galleryHeight={this.state.galleryHeight} />
          <NavBar section={this.state.section} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <About
                  {...props}
                  setGalleryHeight={this.setGalleryHeight}
                  setSection={this.setSection}
                />
              )}
            />
            <Route
              exact
              path="/work"
              render={props => (
                <Work
                  {...props}
                  setGalleryHeight={this.setGalleryHeight}
                  setSection={this.setSection}
                />
              )}
            />
            <Route
              exact
              path="/contact"
              render={props => (
                <Contact
                  {...props}
                  setGalleryHeight={this.setGalleryHeight}
                  setSection={this.setSection}
                />
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
