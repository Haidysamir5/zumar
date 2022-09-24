import React from 'react';
import classes from './Input.module.css';

const Input = props => {
  const childrenClass = props.className ? props.className : '';
  const {placeholder, icon} = props;
  
  return (
    <div className={`${classes['input-container']} ${childrenClass}`}>
        {icon && <div className={classes.icon}>
                <img src={icon}/>
            </div>
        }
        <input className={classes.input} placeholder={placeholder}/>
    </div> 
  );
};

export default Input;
