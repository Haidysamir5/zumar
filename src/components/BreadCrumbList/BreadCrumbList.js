import React from 'react';
import classes from './BreadCrumbList.module.css';

const BreadCrumbList = () => {
  return (
    <div className={`${classes.list}`}>
        <p className={`${classes['bread-crumb']}`}>
            Home > All Industries > Consumer Electronics > Mobile Phone & Accessories > Mobile Phones
        </p>
    </div>
  );
};

export default BreadCrumbList;
