import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render() {
    return (
      <div className = "jumbotron">
        <h1>PS Administration</h1>
      <p>Learn REACT-REDUX and ES6 ect</p>
  <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );

  }
}
export default HomePage;
