import React from 'react';


const Button = ({title, color, }) => {

    return  (
        <button style={ { width : '100px', height : '50px' , background : `${color}`} } type="submit">{title} </button>
    )
}

export default Button;