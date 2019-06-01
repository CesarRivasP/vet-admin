import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';


const Header = ({title}) => (
  <header>
    <h1 className="text-center m-0 mb-2">{ title }</h1>
    <Divider style={{ backgroundColor: 'white' }}/>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
