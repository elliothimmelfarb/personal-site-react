import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import PersonalSite from './PersonalSite';

const App = () => (
  <PersonalSite />
);

render(<App />, document.querySelector('#app'));
