import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// Hello React
// 1. Define a React component
class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={counter:0};
    }
    handelClick=()=>{
        this.setState({counter:this.state.counter+1})
    }
    render(){
    <button onClick={this.handelClick}>
    {this.state.counter}
    </button>
    }
}
// 2. Render the component in the browser
 
ReactDOM.render(<Button />, mountNode);