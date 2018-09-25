import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './about';
import Contact from './contact';
import Interest from './interest';

import { Switch, Route } from 'react-router-dom';

const Main = () => (

  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/interests" component={Interest} />

  </Switch>
)

export default Main;
