import React from 'react';

const ColorBox = ({inputColor, fontColor, getNewColor}) =>{
    return (
        <div className="colorbox" style={{backgroundColor:inputColor}} onClick={() => getNewColor()} >
            <span style={{color:fontColor}}>
               Tap Me
            </span>
        </div>
    )
}

export default ColorBox