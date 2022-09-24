import React from 'react';
import {useSelector} from 'react-redux'
import classes from './NavbarCart.module.css';
import bag from '../../../assets/images/icons/bag.svg';
import Badge from '../../Ui/Badge/Badge';

const NavbarCart = (props) => {
    const cartCount = useSelector(state => state.cartState.cartCount);
    const {hideOnDesktop , hideOnMobile, className} = props ;
    const childrenClass = className ? className : '';
    const desktopClass = hideOnDesktop ?  classes['desktop-none'] : '';
    const mobileClass = hideOnMobile ?  classes['mobile-none'] : '';

  return (
      <span className={`${childrenClass} ${mobileClass} ${desktopClass}`}>
          <img src={bag} alt="cart"/>
          <Badge color="red">{cartCount}</Badge>
      </span>   
  );
};

export default NavbarCart;
