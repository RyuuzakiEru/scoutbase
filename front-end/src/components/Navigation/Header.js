import React from 'react'

import Nav from './Nav';
import StyledHeader from '../styles/StyledHeader'



const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Nav />
    </div>
    <div className="sub-bar">
    </div>
  </StyledHeader>
);

export default Header;