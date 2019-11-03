import React from 'react';

const ColorBox = ({inputColor, getNewColor}) =>{

    return (
        <div className="colorbox" style={{backgroundColor:inputColor}} onClick={() => getNewColor()} >
            <span>
            Tap Me
            </span>
        </div>
    )
}

export default ColorBox