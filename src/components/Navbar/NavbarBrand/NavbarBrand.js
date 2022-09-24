import React from 'react';
import classes from './NavbarBrand.module.css';
import brandSrc from '../../../assets/images/icons/brand.svg'
const NavbarBrand = () => {

  return (
        <div className={classes.brand}>
          <img src={brandSrc} alt="logo"/>
        </div>
  );
};

export default NavbarBrand;
