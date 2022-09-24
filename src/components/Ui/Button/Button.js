import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    const childrenClass = props.className ? props.className : '';
    const color = props.color ? classes[props.color] : '';

  return (
    <div className={`${classes.button} ${childrenClass} ${color}`} 
        onClick={props.onClick}>
       {props.children}
    </div>
  );
};

export default Button;
