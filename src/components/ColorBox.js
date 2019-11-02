import React from 'react';

const ColorBox = ({inputColor, getNewColor}) =>{

    return (
        <div className="colorbox" style={{backgroundColor:inputColor}} onClick={() => getNewColor()} >
            <span>
            Click Me!
            </span>
        </div>
    )
}

export default ColorBox