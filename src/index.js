import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ColorBox from './components/ColorBox.js';
import './index.css';


class ColorChanger extends Component {
state = {
    color: "red",
}

changeColorBox= () => {

 this.setState(
 {   color: document.getElementById("newColor").value} 
 )   
}

    render() {
        return (
        <div className="box">
            <ColorBox inputColor= {this.state.color}/>
            <input type="text"  id="newColor"/> 
             <button onClick={this.changeColorBox}>Change</button>
             <br/>
             You have entered the color: {this.state.color}
             <br/>
             Get list of available colors <a href="https://www.w3schools.com/colors/colors_names.asp" target="_blank">here</a>
          
        </div>
          
        );
    }
}

ReactDOM.render(<ColorChanger />, document.getElementById('root'));

