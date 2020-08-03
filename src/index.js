import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import colorService from './colorService/index.js';
import ColorBox from './components/ColorBox.js';
import './index.css';


class ColorChanger extends Component {
state = {
    color: "Red",
    hex: "#FF0000"
}

changeColorBox= () => {

 this.setState(
 {   color: document.getElementById("newColor").value} 
 )   
}

getRandomColor = () => {
    colorService().then( randomColor => {
        this.setState(prevState => {
            if(prevState.color !== randomColor.color)
                return { color: randomColor.color , hex: randomColor.hex}
            else
                return {color: "Blue", hex: "#0000FF"}
        })
    })
    
}

componentDidMount() {
    this.getRandomColor();
}

    render() {
        return (
        <div className="box">
            <ColorBox inputColor= {this.state.color} getNewColor={() => this.getRandomColor()} />
           { /*<input type="text" placeholder="Type color here" id="newColor"/> 
             <button onClick={this.changeColorBox}>Change</button>
             */}
            <br/>
            Color displayed is {this.state.color} ({this.state.hex}). 
            <br/>
            Get list of available colors <a href="https://www.w3schools.com/colors/colors_names.asp" target="_blank">here</a>
          
        </div>
          
        );
    }
}

ReactDOM.render(<ColorChanger />, document.getElementById('root'));

