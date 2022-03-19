import React from 'react';
import ItemBar from './ItemBar';
import { SiAiqfome, SiSimpleanalytics } from "react-icons/si";
import { FaUsers, FaVoteYea, FaHome } from 'react-icons/fa';



const Bar = () =>  {
    return (
        <div className='fixed top-0 left-0 h-screen w-20 m-0
            flex flex-col bg-gray-900 text-white shadow'>

            <SiAiqfome className='relative flex items-center justify-center h-8 w-8 mt-2 mb-2
                                text-yellow-500 mx-auto shadow-lg mb-3.5 mt-3.5
                                 animate-pulse' />
            <ItemBar icon={<FaHome />} />
            <ItemBar icon={<FaUsers />} />
            <ItemBar icon={<SiSimpleanalytics />} />
            <ItemBar icon={<FaVoteYea />} />
        </div> 
    )};

export default Bar;