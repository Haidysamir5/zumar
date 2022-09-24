import React from 'react';
import classes from './NavbarSearch.module.css';
import searchSrc from '../../../assets/images/icons/search.svg'
import DropDownList from '../../Ui/DropDownList/DropDownList';
import Input from '../../Ui/Input/Input';
const NavbaSearch = () => {

  return (
        <div className={classes['search-container']}>
          <DropDownList  className={classes['search-dropdown']} title="All"/>
          <Input placeholder="Search by product name or seller" icon={searchSrc}/>
        </div>
  );
};

export default NavbaSearch;
