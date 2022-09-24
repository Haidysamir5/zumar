import React from 'react';
import classes from './Col.module.css';

const Col = props => {
    const col = props.col ? classes[`col-${props.col}`] :  classes[`col-auto`];
    const childrenClass = props.className ? props.className : '';

  return (
    <div className={`${col} ${childrenClass}`}>
       {props.children}
    </div>
  );
};

export default Col;
