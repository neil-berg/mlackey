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
    section: ''
  };
  render() {
    return (
      <div>
        <Router>
          <SideGallery />
          <NavBar />
          <Switch>
            <Route exact path="/" component={About} />
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
