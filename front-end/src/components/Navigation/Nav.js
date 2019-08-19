import React from 'react'
import { Link } from 'react-router-dom'

import NavStyles from '../styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link to="/">Home</Link>
        <Link to="/countries">Country List</Link>
    </NavStyles>
);

export default Nav;