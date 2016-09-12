import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Scroll from 'react-scroll';

import styles from './index.scss';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Home from './pages/Home';

// const Events = Scroll.Events;
// const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

export default class App extends Component {
  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    return (
      <div>
        <div className={styles.mainBg} />
        <Navbar />
        <div>
          <Home />
          <Page name="aboutMe">
            About Me
          </Page>
          <Page name="portfolio">
            Portfolio
          </Page>
          <Page name="blog">
            Blog
          </Page>
        </div>
      </div>
    );
  }
}
