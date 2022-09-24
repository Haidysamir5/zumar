import React from 'react';
import classes from './Row.module.css';

const Row = props => {
  const childrenClass = props.className ? props.className : '';
  const width = props.width ? classes[`w-${props.width}`] : '';
  const gap = props.gap ? classes[`gap-${props.gap}`] : '';

  return (
    <div className={`${classes.row} ${childrenClass} ${width} ${gap}`}>
       {props.children}
    </div>
  );
};

export default Row;
