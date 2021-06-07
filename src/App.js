import react from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Services from './pages/service/Services';
import Portfolio from './pages/portfolio/Portfolio';
import ContactUs from './pages/contact/ContactUs';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Switch>

        <Route path="/about">
          <AboutUs />
        </Route>

        <Route path="/service">
          <Services />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>

        <Route path="/" >
          <Home />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
