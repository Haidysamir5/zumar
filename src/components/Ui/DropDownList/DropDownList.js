import React from 'react';
import classes from './DropDownList.module.css';

const DropDownList = props => {
  const childrenClass = props.className ? props.className : '';
  const {list,title} = props;
  
  return (
    <div className={`${classes.dropdown} ${childrenClass}`}>
        <button className={classes.dropbtn}>
            <span className={classes.title}>{title}</span>
            <span className={classes.icon}>
                <span className={ `${classes.chevron} ${classes.bottom}`}></span>
            </span>
        </button>
        <div className={classes['dropdown-content']}>
            {list && list.map(item => {
                return (
                        <a href={item.href}>{item.text}</a>
                )
            })}
        </div>
    </div> 
  );
};

export default DropDownList;
