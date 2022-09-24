import React from 'react';
import classes from './Title.module.css';

const Title = props => {
  const childrenClass = props.className ? props.className : '';
  const color = props.color ? `${props.color}` : '';
  const size = props.size ? props.size : '';

  return (
    <div className={`${classes['title-container']} ${childrenClass}`}>
        <p className={classes.title}>{props.title}</p>
        {props.subTitle && <p className={`${classes.title} ${classes[color]} ${classes[size]}`}>{props.subTitle}</p>}
        
    </div>
  );
};

export default Title;
