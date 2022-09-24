import React from 'react';
import classes from './NavbarMenu.module.css';
import NavbarCart from '../NavbarCart/NavbarCart';

const NavbarMenu = () => {

    const drawMenuList = ()=> {
        return (
            <ul className={classes.menu}>
                <li href="#" className={classes.item}>
                    <span>Services </span>
                </li>               
                <li className={classes.item}>
                    <span> Orders </span>
                </li>   
                <li className={classes.item}>
                    <span> Account </span>
                </li>   
                <li>
                    <NavbarCart className={classes.item} hideOnMobile/>
                </li>   
            </ul>
        )
    }
  return (
    <div className={classes['menu-container']}> 
        <NavbarCart className={classes.item} hideOnDesktop/>
        <input className={classes['menu-btn']} type="checkbox" id="menu-btn" />
        <label className={`${classes.item} ${classes['menu-icon']}`} htmlFor="menu-btn">
            <span className={classes['navicon']}></span>
        </label>
        {drawMenuList()}
      </div>
  );
};

export default NavbarMenu;
