import React from 'react';
import '../../App.css';

const ItemBar = ({icon}) =>  {
return (
        <div className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
                        bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white
                        rounded-full hover:rounded-lg transition-all duration-250 ease-linear
                        cursor-pointer'>
             {icon}
        </div>  
        )};

export default ItemBar;