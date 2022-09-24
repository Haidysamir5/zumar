import React from 'react';
import classes from './Card.module.css';

const Card = props => {
    const childrenClass = props.className ? props.className : '';
    const isSelected = props.isSelected;
    const selectedClass = isSelected ? `${classes.selected}` : '';

  return (
    <div className={`${classes.card} ${selectedClass} ${childrenClass}`} 
        onClick={props.onSelectCard}>
       {props.children}
    </div>
  );
};

export default Card;
