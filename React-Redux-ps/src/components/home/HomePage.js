import React from 'react';
import {link} from 'react-router';

class HomePage extends React.Component{
  render() {
    return (
      <div className = "jumbotron">
        <h1>PS Administration</h1>
      <p>Learn REACT-REDUX and ES6 ect</p>
    <link to="about" className="btn btn-primary btn-lg">Learn!React</link>
      </div>
    )

  }
}
export default HomePage;
