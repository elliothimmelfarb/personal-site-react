import React, { PropTypes } from 'react';
import Scroll from 'react-scroll';
import styles from './styles/Page.scss';

const Element = Scroll.Element;

const Page = (props) => (
  <div className={styles.page}>
    <Element name={props.name} className="element">
      {props.children}
    </Element>
  </div>
);

Page.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default Page;
