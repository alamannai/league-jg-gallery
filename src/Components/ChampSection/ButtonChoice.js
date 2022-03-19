import React from 'react';

const ButtonChoice = (props) =>  {
    return(
    <>
        <button className='grow h-8 w-30 bg-gray-800 text-green-500 
                            hover:bg-green-600 hover:text-white 
                            rounded-full hover:rounded-lg transition-all duration-250 ease-linear
                            '>{props.name}</button>
    </>  
    )};

export default ButtonChoice;