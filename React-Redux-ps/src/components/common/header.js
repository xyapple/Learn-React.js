import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = ()=>{
  return (
    <nav>
      <Indexlink to="/" activeClassName="active">Home</Indexlink>
        {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  )
}
