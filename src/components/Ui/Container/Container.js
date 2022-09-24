import React from 'react';
import classes from './Container.module.css';

const Container = props => {
  const childrenClass = props.className ? props.className : '';

  return (
    <div className={`${classes.container} ${childrenClass}`}>
       {props.children}
    </div>
  );
};

export default Container;
