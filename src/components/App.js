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
    galleryHeight: null
  };

  setGalleryHeight = height => {
    this.setState({ galleryHeight: height });
  };

  // componentDidMount() {
  //   const initialGalleryHeight = window.innerHeight - 40;
  //   const sectionMinHeight = window.innerHeight - 100 - 40;
  //   this.setState({ sectionMinHeight });
  // }

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
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
