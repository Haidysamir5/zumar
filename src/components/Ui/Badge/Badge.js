import React from 'react';
import classes from './Badge.module.css';

const Badge = props => {
    const childrenClass = props.className ? props.className : '';
    const color = props.color ? classes[props.color] : '';

  return (
    <div className={`${classes.badge} ${childrenClass} ${color}`}>
       {props.children}
    </div>
  );
};

export default Badge;
