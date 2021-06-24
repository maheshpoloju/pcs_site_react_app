import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Clients from './pages/Clients';
import Services from './pages/Services';
import BOT from './pages/BOT';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <NavBar />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about" exact><About /></Route>
          <Route path="/clients" exact><Clients /></Route>
          <Route path="/services" exact><Services /></Route>
          <Route path="/bot" exact><BOT /></Route>
          <Route path="/careers" exact><Careers /></Route>
          <Route path="/contact" exact><Contact /></Route>
        </Switch>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default withRouter(App);
