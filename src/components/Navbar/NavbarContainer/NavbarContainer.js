import React from 'react';
import NavbarBrand from '../NavbarBrand/NavbarBrand';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import NavbaSearch from '../NavbarSearch/NavbarSearch';
import classes from './NavbarContainer.module.css';

const NavbarContainer = () => {

  return (
        <div className={classes['navbar-container']}>
          <NavbarBrand/>
          <NavbaSearch/>
          <NavbarMenu/>
        </div>
  );
};

export default NavbarContainer;
