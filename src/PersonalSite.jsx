import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Scroll from 'react-scroll';

import styles from './index.scss';
import Navbar from './components/Navbar';
import Page from './components/Page';

// const Events = Scroll.Events;
// const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

export default class App extends Component {
  componentDidMount() {
    // Events.scrollEvent.register('begin', (to, element) => {
    //   console.log('begin', arguments);
    // });
    //
    // Events.scrollEvent.register('end', (to, element) => {
    //   console.log('end', arguments);
    // });

    scrollSpy.update();
  }

  render() {
    return (
      <div>
        <div className={styles.mainBg} />
        <Navbar />
        <div>
          <Page name="home">
            Home
          </Page>
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
