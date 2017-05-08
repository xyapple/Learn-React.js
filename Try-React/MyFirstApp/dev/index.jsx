import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
  render: function(){
    return (
        <h1>Hello, {this.props.getGreeting}!</h1>
    );
  }
})

ReactDOM.render(
  <div>
    <HelloWorld getGreeting="Apple"/>
    <HelloWorld getGreeting="Pear"/>
    <HelloWorld getGreeting="Pineapple"/>
  </div>,
  document.querySelector("#container")
)
