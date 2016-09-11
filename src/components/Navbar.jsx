import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Scroll from 'react-scroll';

import styles from './styles/Navbar.scss';
import logo from '../../assets/logo.png';

const Link = Scroll.Link;

const MyNavbar = () => (
  <Navbar inverse fixedTop fluid className={styles.nav}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">
          <img
            className={styles.logo}
            src={logo}
            alt="Elliot Himmelfarb"
          />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <Link className={styles.link} spy activeClass={styles.linkActive} to="home" offset={-53} smooth duration={700}>
          <NavItem className={styles.navItem}>
            HOME
          </NavItem>
        </Link>
        <Link className={styles.link} spy activeClass={styles.linkActive} to="aboutMe" offset={-53} smooth duration={700}>
          <NavItem className={styles.navItem}>
            ABOUT ME
          </NavItem>
        </Link>
        <Link className={styles.link} spy activeClass={styles.linkActive} to="portfolio" offset={-53} smooth duration={700}>
          <NavItem className={styles.navItem}>
            PORTFOLIO
          </NavItem>
        </Link>
        <Link className={styles.link} spy activeClass={styles.linkActive} to="blog" offset={-53} smooth duration={700}>
          <NavItem className={styles.navItem}>
            BLOG
          </NavItem>
        </Link>
        <Link  className={styles.link}>
          <NavItem className={styles.navItem} spy activeClass={styles.linkActive} href="#">RESUME</NavItem>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
