import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ColorBox from './components/ColorBox.js';
import './index.css';



class ColorChanger extends Component {
state = {
    color: "",
}

changeColorBox= () => {

 this.setState(
 {   color: document.getElementById("newColor").value} 
 )   
}

    render() {
        return (
        <div>
            {this.state.color == "" ? <ColorBox inputColor="red"/> : <ColorBox inputColor= {this.state.color}/>}
            <input type="text"  id="newColor"/> 
             <button onClick={this.changeColorBox}>Change</button>
             <br/>
             You have entered the color: {this.state.color}
        </div>
          
        );
    }
}

ReactDOM.render(<ColorChanger/>, document.getElementById('root'));

