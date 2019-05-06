import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path ='/' component={Home}></Route>
    {/* exact path ='/' --- is used so 'Home" doesnt render along with About, or wwhatever else is clicked. this is only needed on the first react-router obj */}
    <Route path='/About' component={About}></Route>
    <Route path='/Contact' component={Contact}></Route>
    <Route path='/Navigation' component={Navigation}></Route>
  </div>
);

export default App;
