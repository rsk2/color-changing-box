import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import colorService from './colorService/index.js';
import ColorBox from './components/ColorBox.js';
import './index.css';


class ColorChanger extends Component {
state = {
    color: "Red",
    hex: "#FF0000", 
    fontColor:"white"
}

getRandomColor = () => {
    colorService().then( randomColor => {
        this.setState(prevState => {
            if(prevState.color !== randomColor.color){
                var c = randomColor.hex.substring(1);      // strip #
                var rgb = parseInt(c, 16);   // convert rrggbb to decimal
                var r = (rgb >> 16) & 0xff;  // extract red
                var g = (rgb >>  8) & 0xff;  // extract green
                var b = (rgb >>  0) & 0xff;  // extract blue

                var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
                var textColor = "white";
                if (luma > 128) {
                    // pick a different colour
                    textColor = "black";
                }
                console.log(textColor)
                return { color: randomColor.color , hex: randomColor.hex, fontColor: textColor}
            }
            else
                return {color: "Blue", hex: "#0000FF",  fontColor:"white"}
        })
    })
    
}

componentDidMount() {
    this.getRandomColor();
}

    render() {
        return (
        <div className="box">
            <ColorBox inputColor= {this.state.color} fontColor={this.state.fontColor} getNewColor={() => this.getRandomColor()} />
            <br/>
            Color displayed is {this.state.color} ({this.state.hex}). 
            <br/>
            Get list of available colors <a href="https://www.w3schools.com/colors/colors_names.asp" target="_blank">here</a>
          
        </div>
          
        );
    }
}

ReactDOM.render(<ColorChanger />, document.getElementById('root'));

